
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Icons() {
  return (
    <div className="w-full flex justify-center space-x-6">
      <a
        href="https://github.com/HarshitaKatariya"
        className="text-gray-200 text-5xl p-2 hover:text-blue-500 transition-colors"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/harshita-katariya"
        className="text-gray-200 text-5xl p-2 hover:text-blue-500 transition-colors"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://x.com/Harshita_K1508"
        className="text-gray-200 text-5xl p-2 hover:text-blue-500 transition-colors"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="mailto:harshitakatariya1508@gmail.com"
        className="text-gray-200 text-5xl p-2 hover:text-blue-500 transition-colors"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Icons;
