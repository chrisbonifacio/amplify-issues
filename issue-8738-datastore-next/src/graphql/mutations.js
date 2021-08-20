/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
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
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
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
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
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
export const createNewCourse = /* GraphQL */ `
  mutation CreateNewCourse(
    $input: CreateNewCourseInput!
    $condition: ModelNewCourseConditionInput
  ) {
    createNewCourse(input: $input, condition: $condition) {
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
export const updateNewCourse = /* GraphQL */ `
  mutation UpdateNewCourse(
    $input: UpdateNewCourseInput!
    $condition: ModelNewCourseConditionInput
  ) {
    updateNewCourse(input: $input, condition: $condition) {
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
export const deleteNewCourse = /* GraphQL */ `
  mutation DeleteNewCourse(
    $input: DeleteNewCourseInput!
    $condition: ModelNewCourseConditionInput
  ) {
    deleteNewCourse(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createSettings = /* GraphQL */ `
  mutation CreateSettings(
    $input: CreateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    createSettings(input: $input, condition: $condition) {
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
export const updateSettings = /* GraphQL */ `
  mutation UpdateSettings(
    $input: UpdateSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    updateSettings(input: $input, condition: $condition) {
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
export const deleteSettings = /* GraphQL */ `
  mutation DeleteSettings(
    $input: DeleteSettingsInput!
    $condition: ModelSettingsConditionInput
  ) {
    deleteSettings(input: $input, condition: $condition) {
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
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
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
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
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
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createEnroll = /* GraphQL */ `
  mutation CreateEnroll(
    $input: CreateEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    createEnroll(input: $input, condition: $condition) {
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
export const updateEnroll = /* GraphQL */ `
  mutation UpdateEnroll(
    $input: UpdateEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    updateEnroll(input: $input, condition: $condition) {
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
export const deleteEnroll = /* GraphQL */ `
  mutation DeleteEnroll(
    $input: DeleteEnrollInput!
    $condition: ModelEnrollConditionInput
  ) {
    deleteEnroll(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProgramInstructor = /* GraphQL */ `
  mutation CreateProgramInstructor(
    $input: CreateProgramInstructorInput!
    $condition: ModelProgramInstructorConditionInput
  ) {
    createProgramInstructor(input: $input, condition: $condition) {
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
export const updateProgramInstructor = /* GraphQL */ `
  mutation UpdateProgramInstructor(
    $input: UpdateProgramInstructorInput!
    $condition: ModelProgramInstructorConditionInput
  ) {
    updateProgramInstructor(input: $input, condition: $condition) {
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
export const deleteProgramInstructor = /* GraphQL */ `
  mutation DeleteProgramInstructor(
    $input: DeleteProgramInstructorInput!
    $condition: ModelProgramInstructorConditionInput
  ) {
    deleteProgramInstructor(input: $input, condition: $condition) {
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
export const createCourseInstructor = /* GraphQL */ `
  mutation CreateCourseInstructor(
    $input: CreateCourseInstructorInput!
    $condition: ModelCourseInstructorConditionInput
  ) {
    createCourseInstructor(input: $input, condition: $condition) {
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
export const updateCourseInstructor = /* GraphQL */ `
  mutation UpdateCourseInstructor(
    $input: UpdateCourseInstructorInput!
    $condition: ModelCourseInstructorConditionInput
  ) {
    updateCourseInstructor(input: $input, condition: $condition) {
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
export const deleteCourseInstructor = /* GraphQL */ `
  mutation DeleteCourseInstructor(
    $input: DeleteCourseInstructorInput!
    $condition: ModelCourseInstructorConditionInput
  ) {
    deleteCourseInstructor(input: $input, condition: $condition) {
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
