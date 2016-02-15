const createScore = (session, scope) => {
  return {
    session,
    scope,
    score: 3,
    comments: ''
  };
};

export default createScore;
