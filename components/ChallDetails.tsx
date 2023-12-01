// ChallengeDetails.jsx
import React from 'react';

const ChallengeDetails = ({ ctfLink, challengeLink, challengeFilesLink, points }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <strong>CTF:</strong> <a href={ctfLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{ctfLink}</a>
      </div>
      <div className="mb-4">
        <strong>Challenge:</strong> <a href={challengeLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{challengeLink}</a>
      </div>
      <div className="mb-4">
        <strong>Challenge files:</strong> <a href={challengeFilesLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{challengeFilesLink}</a>
      </div>
      <div>
        <strong>Points:</strong> <span className="text-lg font-semibold text-purple-600">{points}</span>
      </div>
    </div>
  );
};

export default ChallengeDetails;
