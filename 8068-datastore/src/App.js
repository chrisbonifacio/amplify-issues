import React, { useState, useEffect } from "react";
import "./App.css";
import Amplify, { DataStore } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import { Project, Email } from "./models/index";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [emails, setEmails] = useState([]);

  const getProjectsAndEmails = async () => {
    const projectsFromDB = await DataStore.query(Project);
    const emailsFromDB = await DataStore.query(Email);

    setProjects(projectsFromDB);
    setEmails(emailsFromDB);
  };

  const createProject = async (project) => {
    const newProject = await DataStore.save(new Project(project));
    console.log(newProject);
    getProjectsAndEmails();
  };

  const createEmail = async (project) => {
    const newEmail = await DataStore.save(
      new Email({
        title: "Test Email",
        body: "test body",
        language: "english",
        projectID: project.id,
      })
    );
    console.log(newEmail);

    getProjectsAndEmails();
  };

  const deleteProject = async (id) => {
    const projectToDelete = await DataStore.query(Project, id);
    const deletedProject = await DataStore.delete(projectToDelete);
    console.log(deletedProject);
    getProjectsAndEmails();
  };

  const deleteEmail = async (id) => {
    const emailToDelete = await DataStore.query(Email, id);
    const deletedEmail = await DataStore.delete(emailToDelete);
    console.log(deletedEmail);
    getProjectsAndEmails();
  };

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  useEffect(() => {
    getProjectsAndEmails();
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
      <button
        onClick={() =>
          createProject({ name: "Test Project " + (projects.length + 1) })
        }
      >
        Create New Project
      </button>
      <div style={{ marginTop: "15px" }}>
        <h1>Projects</h1>
        {projects.map((p) => (
          <>
            <div>{p.name}</div>
            <button onClick={() => createEmail(p)}>Create Email</button>
            <button onClick={() => deleteProject(p.id)}>Delete</button>
          </>
        ))}
        <h1>Emails</h1>
        {emails.map((e) => (
          <>
            <div>{e.title}</div>
            <div>{e.body}</div>
            <div>I belong to {e?.project?.id}</div>
            <button onClick={() => deleteEmail(e.id)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;
