/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin {
    onCreateAdmin {
      id
      userID
      role
      companyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin {
    onUpdateAdmin {
      id
      userID
      role
      companyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin {
    onDeleteAdmin {
      id
      userID
      role
      companyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNewCourse = /* GraphQL */ `
  subscription OnCreateNewCourse {
    onCreateNewCourse {
      id
      title
      programID
      description
      skillTags
      majorSkill
      modelAnswerLink
      videoLink
      bannerImgLink
      Instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNewCourse = /* GraphQL */ `
  subscription OnUpdateNewCourse {
    onUpdateNewCourse {
      id
      title
      programID
      description
      skillTags
      majorSkill
      modelAnswerLink
      videoLink
      bannerImgLink
      Instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNewCourse = /* GraphQL */ `
  subscription OnDeleteNewCourse {
    onDeleteNewCourse {
      id
      title
      programID
      description
      skillTags
      majorSkill
      modelAnswerLink
      videoLink
      bannerImgLink
      Instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      courseNo
      slugTitle
      programID
      Instructors {
        items {
          id
          courseID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      skillTags
      majorSkill
      modelAnswer
      videoCode
      bannerImg
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      title
      courseNo
      slugTitle
      programID
      Instructors {
        items {
          id
          courseID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      skillTags
      majorSkill
      modelAnswer
      videoCode
      bannerImg
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      title
      courseNo
      slugTitle
      programID
      Instructors {
        items {
          id
          courseID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      skillTags
      majorSkill
      modelAnswer
      videoCode
      bannerImg
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      isSubmitted
      fileLink
      Course {
        id
        title
        courseNo
        slugTitle
        programID
        Instructors {
          nextToken
          startedAt
        }
        description
        skillTags
        majorSkill
        modelAnswer
        videoCode
        bannerImg
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      User {
        id
        given_name
        family_name
        username
        Enrolls {
          nextToken
          startedAt
        }
        Settings {
          id
          isEmailMarketingAgreed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Certificates {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      isSubmitted
      fileLink
      Course {
        id
        title
        courseNo
        slugTitle
        programID
        Instructors {
          nextToken
          startedAt
        }
        description
        skillTags
        majorSkill
        modelAnswer
        videoCode
        bannerImg
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      User {
        id
        given_name
        family_name
        username
        Enrolls {
          nextToken
          startedAt
        }
        Settings {
          id
          isEmailMarketingAgreed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Certificates {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      isSubmitted
      fileLink
      Course {
        id
        title
        courseNo
        slugTitle
        programID
        Instructors {
          nextToken
          startedAt
        }
        description
        skillTags
        majorSkill
        modelAnswer
        videoCode
        bannerImg
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      User {
        id
        given_name
        family_name
        username
        Enrolls {
          nextToken
          startedAt
        }
        Settings {
          id
          isEmailMarketingAgreed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Certificates {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSettings = /* GraphQL */ `
  subscription OnCreateSettings {
    onCreateSettings {
      id
      isEmailMarketingAgreed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSettings = /* GraphQL */ `
  subscription OnUpdateSettings {
    onUpdateSettings {
      id
      isEmailMarketingAgreed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSettings = /* GraphQL */ `
  subscription OnDeleteSettings {
    onDeleteSettings {
      id
      isEmailMarketingAgreed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor {
    onCreateInstructor {
      id
      firstName
      lastName
      jobTitle
      companyID
      profileImg
      profileBanner
      slugTitle
      programs {
        items {
          id
          programID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          courseID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      linkedin
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor {
    onUpdateInstructor {
      id
      firstName
      lastName
      jobTitle
      companyID
      profileImg
      profileBanner
      slugTitle
      programs {
        items {
          id
          programID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          courseID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      linkedin
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor {
    onDeleteInstructor {
      id
      firstName
      lastName
      jobTitle
      companyID
      profileImg
      profileBanner
      slugTitle
      programs {
        items {
          id
          programID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          courseID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      description
      linkedin
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
      id
      referenceID
      userID
      programID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
      id
      referenceID
      userID
      programID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
      id
      referenceID
      userID
      programID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram {
    onCreateProgram {
      id
      title
      slugTitle
      category
      programLogo
      programBanner
      Courses {
        items {
          id
          title
          courseNo
          slugTitle
          programID
          description
          skillTags
          majorSkill
          modelAnswer
          videoCode
          bannerImg
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      companyID
      Company {
        id
        title
        slugTitle
        logoImg
        bannerImg
        Programs {
          nextToken
          startedAt
        }
        website
        description
        category
        logoWhite
        Instructors {
          nextToken
          startedAt
        }
        Admins {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      description
      introVideoCode
      finalVideoCode
      ProgramInstructors {
        items {
          id
          programID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      NewCourses {
        items {
          id
          title
          programID
          description
          skillTags
          majorSkill
          modelAnswerLink
          videoLink
          bannerImgLink
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram {
    onUpdateProgram {
      id
      title
      slugTitle
      category
      programLogo
      programBanner
      Courses {
        items {
          id
          title
          courseNo
          slugTitle
          programID
          description
          skillTags
          majorSkill
          modelAnswer
          videoCode
          bannerImg
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      companyID
      Company {
        id
        title
        slugTitle
        logoImg
        bannerImg
        Programs {
          nextToken
          startedAt
        }
        website
        description
        category
        logoWhite
        Instructors {
          nextToken
          startedAt
        }
        Admins {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      description
      introVideoCode
      finalVideoCode
      ProgramInstructors {
        items {
          id
          programID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      NewCourses {
        items {
          id
          title
          programID
          description
          skillTags
          majorSkill
          modelAnswerLink
          videoLink
          bannerImgLink
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram {
    onDeleteProgram {
      id
      title
      slugTitle
      category
      programLogo
      programBanner
      Courses {
        items {
          id
          title
          courseNo
          slugTitle
          programID
          description
          skillTags
          majorSkill
          modelAnswer
          videoCode
          bannerImg
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      companyID
      Company {
        id
        title
        slugTitle
        logoImg
        bannerImg
        Programs {
          nextToken
          startedAt
        }
        website
        description
        category
        logoWhite
        Instructors {
          nextToken
          startedAt
        }
        Admins {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      description
      introVideoCode
      finalVideoCode
      ProgramInstructors {
        items {
          id
          programID
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      NewCourses {
        items {
          id
          title
          programID
          description
          skillTags
          majorSkill
          modelAnswerLink
          videoLink
          bannerImgLink
          instructorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      title
      slugTitle
      logoImg
      bannerImg
      Programs {
        items {
          id
          title
          slugTitle
          category
          programLogo
          programBanner
          companyID
          description
          introVideoCode
          finalVideoCode
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      website
      description
      category
      logoWhite
      Instructors {
        items {
          id
          firstName
          lastName
          jobTitle
          companyID
          profileImg
          profileBanner
          slugTitle
          description
          linkedin
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Admins {
        items {
          id
          userID
          role
          companyID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      title
      slugTitle
      logoImg
      bannerImg
      Programs {
        items {
          id
          title
          slugTitle
          category
          programLogo
          programBanner
          companyID
          description
          introVideoCode
          finalVideoCode
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      website
      description
      category
      logoWhite
      Instructors {
        items {
          id
          firstName
          lastName
          jobTitle
          companyID
          profileImg
          profileBanner
          slugTitle
          description
          linkedin
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Admins {
        items {
          id
          userID
          role
          companyID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      title
      slugTitle
      logoImg
      bannerImg
      Programs {
        items {
          id
          title
          slugTitle
          category
          programLogo
          programBanner
          companyID
          description
          introVideoCode
          finalVideoCode
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      website
      description
      category
      logoWhite
      Instructors {
        items {
          id
          firstName
          lastName
          jobTitle
          companyID
          profileImg
          profileBanner
          slugTitle
          description
          linkedin
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Admins {
        items {
          id
          userID
          role
          companyID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEnroll = /* GraphQL */ `
  subscription OnCreateEnroll {
    onCreateEnroll {
      id
      User {
        id
        given_name
        family_name
        username
        Enrolls {
          nextToken
          startedAt
        }
        Settings {
          id
          isEmailMarketingAgreed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Certificates {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      programID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEnroll = /* GraphQL */ `
  subscription OnUpdateEnroll {
    onUpdateEnroll {
      id
      User {
        id
        given_name
        family_name
        username
        Enrolls {
          nextToken
          startedAt
        }
        Settings {
          id
          isEmailMarketingAgreed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Certificates {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      programID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEnroll = /* GraphQL */ `
  subscription OnDeleteEnroll {
    onDeleteEnroll {
      id
      User {
        id
        given_name
        family_name
        username
        Enrolls {
          nextToken
          startedAt
        }
        Settings {
          id
          isEmailMarketingAgreed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Certificates {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      programID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      given_name
      family_name
      username
      Enrolls {
        items {
          id
          userID
          programID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Settings {
        id
        isEmailMarketingAgreed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Certificates {
        items {
          id
          referenceID
          userID
          programID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      given_name
      family_name
      username
      Enrolls {
        items {
          id
          userID
          programID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Settings {
        id
        isEmailMarketingAgreed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Certificates {
        items {
          id
          referenceID
          userID
          programID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      given_name
      family_name
      username
      Enrolls {
        items {
          id
          userID
          programID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Settings {
        id
        isEmailMarketingAgreed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Certificates {
        items {
          id
          referenceID
          userID
          programID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProgramInstructor = /* GraphQL */ `
  subscription OnCreateProgramInstructor {
    onCreateProgramInstructor {
      id
      programID
      instructorID
      program {
        id
        title
        slugTitle
        category
        programLogo
        programBanner
        Courses {
          nextToken
          startedAt
        }
        companyID
        Company {
          id
          title
          slugTitle
          logoImg
          bannerImg
          website
          description
          category
          logoWhite
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        description
        introVideoCode
        finalVideoCode
        ProgramInstructors {
          nextToken
          startedAt
        }
        NewCourses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProgramInstructor = /* GraphQL */ `
  subscription OnUpdateProgramInstructor {
    onUpdateProgramInstructor {
      id
      programID
      instructorID
      program {
        id
        title
        slugTitle
        category
        programLogo
        programBanner
        Courses {
          nextToken
          startedAt
        }
        companyID
        Company {
          id
          title
          slugTitle
          logoImg
          bannerImg
          website
          description
          category
          logoWhite
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        description
        introVideoCode
        finalVideoCode
        ProgramInstructors {
          nextToken
          startedAt
        }
        NewCourses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProgramInstructor = /* GraphQL */ `
  subscription OnDeleteProgramInstructor {
    onDeleteProgramInstructor {
      id
      programID
      instructorID
      program {
        id
        title
        slugTitle
        category
        programLogo
        programBanner
        Courses {
          nextToken
          startedAt
        }
        companyID
        Company {
          id
          title
          slugTitle
          logoImg
          bannerImg
          website
          description
          category
          logoWhite
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        description
        introVideoCode
        finalVideoCode
        ProgramInstructors {
          nextToken
          startedAt
        }
        NewCourses {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourseInstructor = /* GraphQL */ `
  subscription OnCreateCourseInstructor {
    onCreateCourseInstructor {
      id
      courseID
      instructorID
      course {
        id
        title
        courseNo
        slugTitle
        programID
        Instructors {
          nextToken
          startedAt
        }
        description
        skillTags
        majorSkill
        modelAnswer
        videoCode
        bannerImg
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseInstructor = /* GraphQL */ `
  subscription OnUpdateCourseInstructor {
    onUpdateCourseInstructor {
      id
      courseID
      instructorID
      course {
        id
        title
        courseNo
        slugTitle
        programID
        Instructors {
          nextToken
          startedAt
        }
        description
        skillTags
        majorSkill
        modelAnswer
        videoCode
        bannerImg
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseInstructor = /* GraphQL */ `
  subscription OnDeleteCourseInstructor {
    onDeleteCourseInstructor {
      id
      courseID
      instructorID
      course {
        id
        title
        courseNo
        slugTitle
        programID
        Instructors {
          nextToken
          startedAt
        }
        description
        skillTags
        majorSkill
        modelAnswer
        videoCode
        bannerImg
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      instructor {
        id
        firstName
        lastName
        jobTitle
        companyID
        profileImg
        profileBanner
        slugTitle
        programs {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        description
        linkedin
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
