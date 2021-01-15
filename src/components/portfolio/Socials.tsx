import React, { useEffect, useState } from 'react';

const USER_ID = '5711949';

const Socials = (({ data }: any) => {
  const [stackOverflowData, setStackOverflowData] = useState({ reputation: 0, badge_counts: { bronze: 0, silver: 0, gold: 0 } });
  const { reputation, badge_counts } = stackOverflowData;


  const fetchStackOverflowData = async () => {
    const api_call = await fetch(
      `https://api.stackexchange.com/2.2/users/${USER_ID}/?site=stackoverflow`
    );
    const soData = await api_call.json();
    if (!soData.error_id) {
      setStackOverflowData(soData.items[0]);
    } else {
      console.error('Couldnt return Stack Overflow User Data', soData.error_id);
      return false;
    }
  };

  useEffect(() => {
    fetchStackOverflowData();
  }, []);

  return (
    <ul>
      {data.map(
        (social: any, index: any) => (
          <li key={index}>
            <a title={social.title} className={social.title === 'Stack Overflow' ? 'so-link' : ''} target='_blank' rel="noopener noreferrer" href={social.link}>
              {social.title === 'Stack Overflow' ? (
                <div className='so-tooltip'>
                  <h3>StackOverflow Data</h3>
                  <p>Reputation: {reputation}</p>
                  <p>Badges:</p>
                  <ul>
                    <li>Bronze: {badge_counts.bronze}</li>
                    <li>Silver: {badge_counts.silver}</li>
                    <li>Gold: {badge_counts.gold}</li>
                  </ul>
                </div>
              ) : null}
              <img src={`${process.env.PUBLIC_URL}${social.icon}`} alt={social.title} />
            </a>
          </li>
        )
      )}
    </ul>
  );
});

export default Socials;
