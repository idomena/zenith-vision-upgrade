import { createFileRoute } from '@tanstack/react-router';
import Landing from '@/components/Landing';

export const Route = createFileRoute('/')({
  component: Landing,
  head: () => ({
    meta: [
      { title: 'AIverse — Discover the best AI tools' },
      { name: 'description', content: 'Browse hundreds of AI tools across every category. Save favorites, launch instantly, and find exactly what you need — all in one place.' },
    ],
  }),
});
