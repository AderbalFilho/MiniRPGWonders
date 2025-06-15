import Link from 'next/link';
import Image from "next/image";
import cn from 'classnames';

export default function SocialMedia({ isModal, productionPrefix }: { isModal?: boolean, productionPrefix: string }) {
  const socialMediaLinks = [
    { label: 'Etsy', href: 'https://minirpgwonders.etsy.com' },
    { label: 'Instagram', href: 'https://www.instagram.com/minirpgwonders' }
  ]

  return (
    <div className={cn('gap-4', isModal ? 'flex justify-center' : 'hidden lg:flex justify-end items-center w-[30%] pr-4')}>
      {socialMediaLinks.map(socialMediaLink => 
        <Link href={socialMediaLink.href} target="_blank" key={socialMediaLink.label}>
          <Image
            src={`${productionPrefix}/social_media/${socialMediaLink.label.toLowerCase()}_logo.png`}
            alt={`${socialMediaLink.label} logo`}
            title={socialMediaLink.label}
            width={40}
            height={40}
            priority
          />
        </Link>
      )}
    </div>
  )
}