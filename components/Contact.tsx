import React from 'react';
import type { ContactInfo } from '../types';
import { MailIcon, PhoneIcon, TelegramIcon, InstagramIcon, GithubIcon } from './icons/SocialIcons';
import SectionWrapper from './SectionWrapper';

const contactDetails: ContactInfo[] = [
    {
        icon: <MailIcon />,
        text: 'ramizortiqov07@gmail.com',
        link: 'mailto:ramizortiqov07@gmail.com'
    },
    {
        icon: <PhoneIcon />,
        text: '+7 (999) 000-94-46',
        link: 'tel:+79990009446'
    },
    {
        icon: <TelegramIcon />,
        text: '@ramizortikov',
        link: 'https://t.me/ramizortikov'
    },
    {
        icon: <InstagramIcon />,
        text: '@ramiz_ortiqov',
        link: 'https://instagram.com/ramiz_ortiqov'
    },
     {
        icon: <GithubIcon />,
        text: 'github.com/ramizortiqov',
        link: 'https://github.com/ramizortiqov'
    },
]

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Контакты" className="bg-brand-bg-dark">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-brand-text-secondary mb-12 leading-relaxed">
            Открыт для новых проектов и интересных предложений. Свяжитесь со мной любым удобным способом.
        </p>
        <div className="flex flex-col items-center sm:items-start gap-6 w-fit mx-auto">
            {contactDetails.map((detail, index) => (
                <a
                    key={index}
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-brand-text-secondary hover:text-brand-accent transition-all duration-300 group text-lg font-medium p-3 rounded-lg hover:bg-brand-bg-light"
                >
                    <span className="w-8 h-8 text-brand-accent group-hover:scale-110 transition-transform">{detail.icon}</span>
                    <span>{detail.text}</span>
                </a>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;