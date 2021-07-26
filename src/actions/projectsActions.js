export const FETCH_PROJECTS_BEGIN = 'FETCH_PROJECT_BEGIN';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECT_FAILURE';
export const SHOW_ALL_PROJECTS = 'SHOW_ALL_PROJECTS';
export const SHOW_USER_PROJECTS = 'SHOW_USER_PROJECTS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchProjectsBegin = () => ({
  type: FETCH_PROJECTS_BEGIN,
});

export const fetchProjectsSuccess = (allProjects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  allProjects,
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: { error },
});

export const showAllProjects = (currency) => ({
  type: SHOW_ALL_PROJECTS,
  currency,
});

export const showUserProjects = (userProjects) => ({
  type: SHOW_USER_PROJECTS,
  userProjects,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
