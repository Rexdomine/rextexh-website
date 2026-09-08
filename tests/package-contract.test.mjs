import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;

test('project is scaffolded as a Vercel-ready Next application', () => {
  assert.equal(existsSync(join(root, 'package.json')), true, 'package.json should exist');
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
  assert.equal(pkg.scripts?.dev, 'next dev');
  assert.equal(pkg.scripts?.build, 'next build');
  assert.equal(pkg.scripts?.lint, 'eslint .');
  assert.equal(pkg.scripts?.test, 'node --test tests/*.test.mjs');
  assert.ok(pkg.dependencies?.next, 'Next dependency required');
  assert.ok(pkg.dependencies?.react, 'React dependency required');
  assert.ok(pkg.dependencies?.['react-dom'], 'React DOM dependency required');
});
