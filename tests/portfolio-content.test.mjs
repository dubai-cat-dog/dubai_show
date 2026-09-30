import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');

test('Animals 3D uses the verified public project URL', () => {
  assert.match(html, /https:\/\/animals-3d\.pages\.dev\//);
  assert.match(html, /<b>1584<\/b>/);
  assert.match(html, /data-i18n="animals\.records">条展示记录/);
  assert.doesNotMatch(html, /<b>559<\/b>/);
});

test('The site favicon uses the black cat persona image', () => {
  assert.match(html, /href="\/assets\/black-cat-scarf-pixel\.png\?v=cat"/);
});

test('The home logo uses the black cat persona avatar', () => {
  assert.match(html, /class="logo"[\s\S]*?src="\/assets\/black-cat-scarf-pixel\.png"/);
  assert.doesNotMatch(html, /class="logo"[\s\S]*?<span>\s*唐\s*<\/span>/);
});

test('TypeWords only links to its official website', () => {
  assert.match(html, /href="https:\/\/typewords\.cc\/"/);
  assert.doesNotMatch(html, /github\.com\/zyronon\/TypeWords|查看开源项目/);
});

test('The contact email is consistent across the portfolio', () => {
  assert.match(html, /mailto:wshixiaotang@163\.com/);
  assert.match(html, />wshixiaotang@163\.com<\/a>/);
});

test('Contact buttons open the bilingual contact dialog', () => {
  assert.match(html, /data-contact-modal/);
  assert.match(html, /data-contact-trigger/);
  assert.match(html, /你好，我非常欢迎你来联系我，不管是提出建议或者学习交流，这是我的邮箱：/);
  assert.match(html, /data-i18n="modal\.copy"/);
  assert.match(html, /data-language-toggle/);
});

test('Q-Pet uses the single-penguin asset instead of an invented dashboard', () => {
  assert.match(html, /\/assets\/qpet-penguin\.png/);
  assert.doesNotMatch(html, /qpet-window|Q-Pet 控制台/);
});

test('Q-Pet asset exists in the project', () => {
  assert.equal(existsSync(new URL('public/assets/qpet-penguin.png', root)), true);
});

test('The portfolio uses a local nebula background and procedural starfield', () => {
  assert.equal(existsSync(new URL('public/assets/portfolio-nebula.png', root)), true);
  assert.match(html, /class="space-backdrop"/);
  assert.match(html, /class="starfield"/);
});

test('The hero uses a continuous vortex nebula instead of orbit rings', () => {
  assert.match(html, /class="hero-nebula"/);
  assert.doesNotMatch(html, /hero-orbit/);
  assert.doesNotMatch(readFileSync(new URL('src/styles.css', root), 'utf8'), /@keyframes orbit/);
  assert.match(readFileSync(new URL('src/main.js', root), 'utf8'), /isStreamParticle/);
});

test('The cat persona has an accessible hover/focus tilt stage', () => {
  assert.match(html, /data-cat-stage/);
  assert.match(html, /class="portrait-head"/);
  assert.match(readFileSync(new URL('src/styles.css', root), 'utf8'), /cat-head-tilt/);
});

test('GitHub Pages uses the repository base path', () => {
  const viteConfig = readFileSync(new URL('vite.config.js', root), 'utf8');
  const workflow = readFileSync(new URL('.github/workflows/deploy.yml', root), 'utf8');

  assert.match(viteConfig, /base:\s*['"]\/dubai_show\/['"]/);
  assert.match(workflow, /npm ci/);
  assert.match(workflow, /npm run build/);
  assert.match(workflow, /actions\/upload-pages-artifact@v3/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});

test('Static interface links remain relative for GitHub Pages project sites', () => {
  assert.match(html, /href="\.\/assets\/animals-3d\.png"/);
});
