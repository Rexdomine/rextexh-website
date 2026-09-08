import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

test('homepage source preserves approved RexTexh copy and section flow', () => {
  assert.equal(existsSync(join(root, 'app/page.tsx')), true, 'app/page.tsx should exist');
  const page = read('app/page.tsx');
  const requiredCopy = [
    'Use AI to save time, improve workflows, and build better business systems.',
    'RexTexh helps businesses figure out where AI can actually help',
    'Not sure what to build yet? That is exactly what the first conversation is for.',
    'You might need RexTexh if',
    'From unclear AI idea to working business system.',
    'Practical AI support across the work your business already does.',
    'What a RexTexh engagement can look like.',
    'Practical thinking before complicated technology.',
    'Practical AI learning connected to real implementation.',
    'Know AI could help, but not sure what to build first?',
    'Useful AI. Clear workflows. Practical systems.'
  ];
  for (const text of requiredCopy) {
    assert.match(page, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `missing approved copy: ${text}`);
  }
  assert.doesNotMatch(page, /Founder\s*\/\s*Brand Bridge/i, 'homepage must not include the rejected founder bridge section');
});

test('homepage source includes intentional cursor-reactive hero motion hooks and accessibility fallback', () => {
  assert.equal(existsSync(join(root, 'app/page.tsx')), true, 'app/page.tsx should exist');
  assert.equal(existsSync(join(root, 'app/globals.css')), true, 'app/globals.css should exist');
  const page = read('app/page.tsx');
  const css = read('app/globals.css');
  assert.match(page, /onPointerMove|pointermove|useMotionSystem/i, 'hero needs pointer-driven interaction');
  assert.match(page, /0|1|binary|particle|code/i, 'hero needs binary/code particle language');
  assert.match(page, /Assess[\s\S]*Build[\s\S]*Automate[\s\S]*Improve/i, 'hero needs Assess/Build/Automate/Improve diagram labels');
  assert.match(css, /prefers-reduced-motion/i, 'motion must support reduced-motion users');
  assert.match(css, /--cursor-x|--cursor-y|proximity|spotlight/i, 'CSS should expose cursor/proximity visual controls');
});

test('homepage source stays first-page only while navigation exposes approved future pages', () => {
  const page = read('app/page.tsx');
  for (const label of ['Home', 'Services', 'Learn', 'About', 'Book a Call']) {
    assert.match(page, new RegExp(`>${label}<|${label}`), `navigation should include ${label}`);
  }
  for (const path of ['app/services/page.tsx', 'app/learn/page.tsx', 'app/about/page.tsx', 'app/book-a-call/page.tsx']) {
    assert.equal(existsSync(join(root, path)), false, `${path} should not be built in homepage-only scope`);
  }
});
