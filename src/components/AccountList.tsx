import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faXTwitter,
  faGithub,
  faMastodon,
} from '@fortawesome/free-brands-svg-icons'

const accounts = [
  {
    username: '@fohte@social.fohte.net',
    link: 'https://social.fohte.net/@fohte',
    icon: faMastodon,
  },
  {
    username: 'fohte.net',
    link: 'https://fohte.net',
    icon: faLink,
  },
  {
    username: '@fohte',
    link: 'https://twitter.com/fohte',
    icon: faXTwitter,
  },
  {
    username: '@fohte',
    link: 'https://github.com/fohte',
    icon: faGithub,
  },
]

const AccountList: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="bg-black text-white max-w-lg w-full p-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-row items-center space-x-8">
            <img
              src="https://fohte.net/icon.png"
              alt="Avatar"
              className="size-32"
            />
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-4xl font-bold">Fohte</h1>
              <h2 className="text-xl font-medium">Hayato Kawai</h2>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-gray-400">
            <p>Software/Infra Engineer & Gamer</p>
            <p>Love: Neovim, Dvorak, Rhythm Games</p>
          </div>
        </div>
        <hr className="border-t border-red-500 w-full mt-8 mb-6" />
        <ul className="flex flex-col items-center w-full">
          {accounts.map((account, index) => (
            <li key={index} className="flex items-center w-full">
              <a
                href={account.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={account.icon}
                  className="mr-4 size-4 inline"
                />
                <span className="">{account.username}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AccountList
