import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Features</a>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern ccontent management system for\n'}
            <span className="text-primary-500">Driving Schools</span>
          </>
        }
        description="The easiest way to manage your driving school."
        button={
          <Link href="https://google.com/">
            <a>
              <Button xl>Start your trial period </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
