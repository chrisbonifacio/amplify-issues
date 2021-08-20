/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAdmins = /* GraphQL */ `
  query SyncAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
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
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncNewCourses = /* GraphQL */ `
  query SyncNewCourses(
    $filter: ModelNewCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        Instructor {
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
  }
`;
export const getNewCourse = /* GraphQL */ `
  query GetNewCourse($id: ID!) {
    getNewCourse(id: $id) {
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
export const listNewCourses = /* GraphQL */ `
  query ListNewCourses(
    $filter: ModelNewCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Instructor {
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
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isSubmitted
        fileLink
        Course {
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
        User {
          id
          given_name
          family_name
          username
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
      nextToken
      startedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isSubmitted
        fileLink
        Course {
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
        User {
          id
          given_name
          family_name
          username
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
      nextToken
      startedAt
    }
  }
`;
export const syncSettings = /* GraphQL */ `
  query SyncSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isEmailMarketingAgreed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSettings = /* GraphQL */ `
  query GetSettings($id: ID!) {
    getSettings(id: $id) {
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isEmailMarketingAgreed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInstructors = /* GraphQL */ `
  query SyncInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
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
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCertificates = /* GraphQL */ `
  query SyncCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCertificates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
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
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncPrograms = /* GraphQL */ `
  query SyncPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrograms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
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
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEnrolls = /* GraphQL */ `
  query SyncEnrolls(
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnrolls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        User {
          id
          given_name
          family_name
          username
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
      nextToken
      startedAt
    }
  }
`;
export const getEnroll = /* GraphQL */ `
  query GetEnroll($id: ID!) {
    getEnroll(id: $id) {
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
export const listEnrolls = /* GraphQL */ `
  query ListEnrolls(
    $filter: ModelEnrollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User {
          id
          given_name
          family_name
          username
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProgramInstructors = /* GraphQL */ `
  query SyncProgramInstructors(
    $filter: ModelProgramInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProgramInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        instructor {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourseInstructors = /* GraphQL */ `
  query SyncCourseInstructors(
    $filter: ModelCourseInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        courseID
        instructorID
        course {
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
        instructor {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
