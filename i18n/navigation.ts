import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'fr'];


export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation();