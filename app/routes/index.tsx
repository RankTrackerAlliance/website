import { tw } from 'twind/css'
import type { MetaFunction } from 'remix'
import { Link } from 'remix'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineRead } from 'react-icons/ai'

import headerImg from '../images/header.png'

export let meta: MetaFunction = () => {
  const title = 'RTA - Common Crawl for Google SERPs'
  const description = `A central and shared platform for crawling and indexing google SERPs`
  const imageHref = 'https://ranktrackeralliance.com/favicon.png'
  return {
    title,
    description,
    keywords:
      'rank,tracker,keywords,serp,crawling,indexing,google,common,crawl',
    'twitter:image': imageHref,
    'twitter:card': 'summary_large_image',
    // 'twitter:creator': '@tannerlinsley',
    // 'twitter:site': '@tannerlinsley',
    'twitter:title': 'Rank Tracker Alliance',
    'twitter:description': description,
    'og:type': 'website',
    'og:title': title,
    'og:description': description,
    'og:image': imageHref,
  }
}

export default function Index() {
  return (
    <div>
      <section
        className={tw`text-white relative bg-[#0039C6]`}
        style={{
          backgroundImage: `
          radial-gradient(50% 100%, #00A2FF 0%, #0039C6 100%);
          )})`,
        }}
      >
        <div className={tw`relative`}>
          <nav className={tw`max-w-screen-md mx-auto text-white`}>
            <div className={tw`flex items-center justify-between p-8`}>
              <Link to="/" className={tw`px-2 py-1 text-xl font-bold`}>
                Rank Tracker Alliance
              </Link>
              <ul className={tw`flex items-center justify-between gap-2`}>
                {[
                  {
                    href: 'https://github.com/tannerlinsley',
                    label: (
                      <div className={tw`inline-flex items-center gap-2`}>
                        <FaGithub />
                        <span>Github</span>
                      </div>
                    ),
                  },
                ].map(({ href, label }) => (
                  <li key={`${href}${label}`} className={tw`inline-block`}>
                    <a
                      href={href}
                      className={tw`inline-block px-2 py-1 rounded-md transition-all hover:(bg-gray-900 bg-opacity-20)`}
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className={tw`text-center -mt-20 p-20`}>
            <img src={headerImg} className={tw`w-[300px] max-w-full mx-auto`} />
            <div className={tw`h-10`} />
            <p
              className={tw`inline-block py-2 px-4 text-xl rounded-2xl text-center font-extralight bg-black bg-opacity-40`}
            >
              Common Crawl for Google SERPs
            </p>
          </div>
        </div>
      </section>
      <div
        className={tw`relative max-w-screen-md mx-2 rounded-md p-8 -mt-10 bg-white shadow-lg md:(mx-auto) dark:(bg-gray-800)`}
      >
        <div className={tw`text-3xl text-center`}>What is the RTA?</div>
        <div className={tw`h-4`} />
        <div>
          The <em>Rank Tracker Alliance</em> is a joint effort by interested
          parties to share the responsibilities and cost of SERP retrieval for
          the most common keywords across the web.
        </div>
      </div>
      <div className={tw`h-4`} />
      <div
        className={tw`relative max-w-screen-md mx-2 rounded-md p-8 bg-white shadow-lg md:(mx-auto) dark:(bg-gray-800)`}
      >
        <div className={tw`text-3xl text-center`}>
          Why is the RTA important?
        </div>
        <div className={tw`h-4`} />
        <div>
          Every rank tracker wanting to provide a global index of common SERP
          information is currently required to build their own keword list and
          ultimately collect the same SERP HTML as every other rank tracker.
        </div>
        <div className={tw`h-2`} />
        <ul className={tw`list-disc pl-8`}>
          <li>Google Search HTML is a commodity</li>
          <li>Collection is expensive and difficult at scale</li>
          <li>Storing the HTML is expensive</li>
          <li>
            Product differentiation is generally not based on collection, but
            instead parsing, querying and reporting
          </li>
        </ul>
      </div>
      <div className={tw`h-4`} />
      <div
        className={tw`relative max-w-screen-md mx-2 rounded-md p-8 bg-white shadow-lg md:(mx-auto) dark:(bg-gray-800)`}
      >
        <div className={tw`text-3xl text-center`}>How does it work?</div>
        <div className={tw`h-4`} />
        <div>
          The RTA maintains a curated list of billions of keywords that are
          sorted by search volume each month. Depending on a keywords search
          volume and various other factors, it is scheduled either daily,
          weekly, monthly or even at longer intervals for retrieval by an
          edge-distributed cloud function task queue.
        </div>
        <div className={tw`h-4`} />
        <div>
          When a keyword is scheduled:
          <div className={tw`h-2`} />
          <ul className={tw`list-disc pl-8`}>
            <li>
              Its HTML is requested and downloaded via one of our SERP providers
            </li>
            <li>The HTML is normalized and processed for consistency and QA</li>
            <li>
              The previous entry's HTML is diffed as a list of delta changes
            </li>
            <li>
              The HTML is compressed and stored for cost-efficiency and high
              availability
            </li>
            <li>PubSub/SNS notifications are dispatched to subscribers</li>
          </ul>
        </div>
        <div className={tw`h-4`} />
        <div>
          All keyword data and HTML is stored long-term and made available to
          subscribers through a lightning fast edge-distributed API.
        </div>
      </div>
      <div className={tw`h-4`} />
      <div
        className={tw`relative max-w-screen-md mx-2 rounded-md p-8 shadow-lg md:(mx-auto) bg-gray-700 text-white`}
      >
        <div className={tw`text-3xl text-center`}>Who runs the RTA?</div>
        <div className={tw`h-4`} />
        <div>
          The RTA is a not-for profit LLC jointly operated by all
          members/parties. Current members include:
        </div>
        <div className={tw`h-8`} />
        <div className={tw`flex gap-12 flex-wrap items-center justify-center`}>
          {[
            [require('../images/logos/nozzle.svg'), 'https://nozzle.io'],
            [
              require('../images/logos/seoclarity.png'),
              'https://seoclarity.net',
            ],
          ].map(([logoSrc, href]) => {
            return (
              <a key={logoSrc} href={href}>
                <img src={logoSrc} className={tw`w-[250px] max-w-full`} />
              </a>
            )
          })}
        </div>
      </div>
      <div className={tw`h-4`} />
      <div
        className={tw`relative max-w-screen-md mx-2 rounded-md p-8 shadow-lg md:(mx-auto) text-white bg-green-600`}
      >
        <div
          className={tw`text-center`}
          style={{
            textShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className={tw`text-3xl`}>Ready to dig in?</div>
          <div className={tw`h-6`} />
          <div className={tw`inline-block w-[400px]`}>
            More details are available in our presentation on the spec below. It
            covers:
          </div>
          <div className={tw`h-6`} />
          <ul className={tw`inline-block text-left list-disc pl-8 font-bold`}>
            <li>Technical implementation details</li>
            <li>Cost structures and billing agreements</li>
            <li>FAQ</li>
            <li>Questions and Discussion Points</li>
          </ul>
        </div>
        <div className={tw`h-8`} />
        <div className={tw`text-center`}>
          <a
            href="https://docs.google.com/presentation/d/1ab7lzBILDb_7UZ9fLEKj5fJhEKlXm1dZudeHCT_3JCg/edit?usp=sharing"
            target="_blank"
            className={tw`text-2xl inline-flex gap-2 items-center bg-white text-green-700 rounded-lg py-2 px-4 shadow-md`}
          >
            <AiOutlineRead />
            <span>Read the Spec</span>
          </a>
        </div>
      </div>
      <div className={tw`h-20`} />
      <div className={tw`bg-gray-800 text-white shadow-lg`}>
        <div className={tw`max-w-screen-md mx-auto py-12 px-4`}>
          <div className={tw`flex gap-2 flex-wrap`}>
            <div className={tw`flex-1`}>
              {[
                {
                  name: (
                    <div className={tw`inline-flex items-center gap-2`}>
                      <FaGithub />
                      <span>Github</span>
                    </div>
                  ),
                  href: 'https://github.com/tannerlinsley',
                },
                {
                  name: 'Contact',
                  href: 'mailto:rta@nozzle.io',
                },
              ].map((link) => (
                <div key={link.href}>
                  <a href={link.href} className={tw`hover:underline`}>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
            <div className={tw`flex-1`}>
              <div className={tw`font-thin`}>Members</div>
              <div className={tw`h-2`} />
              <div className={tw`h-px bg-white opacity-30`} />
              <div className={tw`h-2`} />
              {[
                {
                  name: 'Nozzle.io',
                  href: 'https://nozzle.io',
                },
                {
                  name: `SEO Clarity`,
                  href: 'https://seoclarity.net',
                },
              ].map((link) => (
                <div key={link.href}>
                  <a href={link.href} className={tw`hover:underline`}>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={tw`text-center opacity-20 text-sm`}>
          &copy; {new Date().getFullYear()} Rank Tracker Alliance LLC
        </div>
        <div className={tw`h-8`}></div>
      </div>
    </div>
  )
}
