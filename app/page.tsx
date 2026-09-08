'use client';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Learn', href: '#learn' },
  { label: 'About', href: '#why-rextexh' },
  { label: 'Book a Call', href: '#book-a-call' },
];

const painPoints = [
  {
    title: 'Your team repeats the same manual tasks every week',
    copy: 'Reports, follow-ups, data entry, approvals, updates, reminders, and handoffs can often be simplified with the right automation.',
  },
  {
    title: 'Your tools do not work together cleanly',
    copy: 'If your business depends on forms, spreadsheets, email, CRMs, dashboards, or messaging apps, RexTexh can help connect the workflow.',
  },
  {
    title: 'You want AI, but do not know what to build first',
    copy: 'We help you decide whether you need automation, a custom app, an internal assistant, training, or a simpler process before building anything.',
  },
  {
    title: 'Your team needs answers faster',
    copy: 'An internal AI assistant can help staff find information from documents, policies, FAQs, processes, or company knowledge without searching everywhere manually.',
  },
  {
    title: 'You need practical guidance, not another AI trend',
    copy: 'RexTexh helps you choose useful AI opportunities and avoid complicated ideas that do not create real value.',
  },
];

const methodBlocks = [
  ['01', 'Understand the operation', 'We look at how the work currently happens: what your team repeats, where information gets stuck, what slows people down, and what could be made simpler.'],
  ['02', 'Decide what should be built', 'Not every problem needs a chatbot. Some need a dashboard, an automated follow-up, a better form, a custom app, a staff assistant, or simply a clearer workflow.'],
  ['03', 'Build the practical system', 'RexTexh develops the software, automations, internal tools, or AI assistants needed to support the workflow in real use.'],
  ['04', 'Help your team use it', 'A useful system is not finished just because it launches. We help make the workflow clear enough for people to understand, adopt, and improve.'],
];

const capabilities = [
  ['AI Implementation Consulting', 'We help you find where AI makes sense in your business and decide what should happen first.', 'Examples: workflow audits, AI opportunity mapping, tool selection, automation planning, implementation roadmaps.', 'Outcome: move from scattered AI ideas to a clear action plan.'],
  ['AI Software & Product Builds', 'We design and build custom digital tools when off-the-shelf software is not enough.', 'Examples: client portals, internal dashboards, booking systems, reporting tools, AI-powered web apps, business workflow apps.', 'Outcome: turn a business need into a working system.'],
  ['Automation & Workflow Systems', 'We reduce repeated manual work by connecting the tools, data, and steps your business already uses.', 'Examples: form-to-email flows, spreadsheet updates, lead follow-ups, task handoffs, reporting workflows, CRM automations.', 'Outcome: save time and reduce operational friction.'],
  ['Internal Assistants & Agent Systems', 'We create AI assistants that support your team with information, research, reporting, and internal knowledge work.', 'Examples: document assistants, FAQ assistants, operations support agents, research helpers, reporting assistants, staff knowledge tools.', 'Outcome: help your team get useful answers and complete work faster.'],
  ['Advisory, Training & Mentoring', 'We help founders, teams, and builders understand AI clearly and use it with confidence.', 'Examples: corporate AI training, private mentoring, team workshops, practical AI adoption sessions, Prompt-to-Code learning paths.', 'Outcome: build capability inside your team, not dependency on buzzwords.'],
];

const pathways = [
  ['For businesses exploring AI', 'You know AI could help, but you need clarity on what to automate, what to build, and what to avoid.', 'Book a discovery call'],
  ['For companies that need software or automation', 'You have a process, workflow, or business problem that needs a practical system built around it.', 'Explore services'],
  ['For teams that need AI training', 'Your team needs to understand how to use AI tools in a way that is practical, safe, and relevant to their work.', 'Book a team call'],
  ['For builders and learners', 'You want structured learning, mentoring, or practical guidance on using AI to build real things.', 'Explore Learn'],
];

const learningPaths = [
  ['Understand the basics', 'Learn the practical foundations of AI tools, prompting, automation, and modern workflows.'],
  ['Build useful things', 'Move from watching tutorials to creating automations, apps, internal tools, and AI-assisted workflows.'],
  ['Get guided support', 'Use mentoring or structured support when you need direction, feedback, or accountability.'],
];

const bookingPrompts = [
  'I want help finding where AI fits in my business',
  'I want software or automation built',
  'I want an internal assistant or AI workflow',
  'I want training or advisory for my team',
  'I want practical guidance or mentoring',
];

const particles = ['0', '1', 'map()', 'sync', 'flow', 'AI', '01', 'build'];

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p className="section-intro">{children}</p> : null}
    </div>
  );
}

export default function Home() {
  const [cursor, setCursor] = useState({ x: 52, y: 44, active: false });
  const statusItems = useMemo(() => ['Mapping workflow', 'Finding repeated tasks', 'Connecting tools', 'Designing automation path', 'Preparing implementation plan'], []);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setCursor({ x, y, active: true });
  }

  function handlePointerLeave() {
    setCursor((current) => ({ ...current, active: false }));
  }

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="RexTexh site navigation">
        <Link className="brand-mark" href="/" aria-label="RexTexh home">
          <span className="crown-glyph" aria-hidden="true">◆</span>
          <span>RexTexh</span>
        </Link>
        <nav>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#book-a-call">Book a Call</a>
      </header>

      <section
        className={`hero ${cursor.active ? 'is-active' : ''}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ '--cursor-x': `${cursor.x}%`, '--cursor-y': `${cursor.y}%` } as CSSProperties}
      >
        <div className="hero-copy">
          <p className="eyebrow">AI strategy, software, automation, and practical training for real business work.</p>
          <h1>Use AI to save time, improve workflows, and build better business systems.</h1>
          <p className="hero-subhead">RexTexh helps businesses figure out where AI can actually help, then designs and builds practical tools, automations, assistants, and software around the way your team already works.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#book-a-call">Book a Call</a>
            <a className="secondary-button" href="#how-it-works">See how RexTexh works</a>
          </div>
          <p className="reassurance">Not sure what to build yet? That is exactly what the first conversation is for.</p>
          <p className="proof-line">Clear technical thinking. Practical implementation. No AI hype.</p>
        </div>

        <div className="hero-system" aria-label="RexTexh AI implementation workflow visual">
          <div className="spotlight" aria-hidden="true" />
          <div className="particle-field" aria-hidden="true">
            {particles.map((particle, index) => (
              <span key={`${particle}-${index}`} className={`particle particle-${index}`}>{particle}</span>
            ))}
          </div>
          <div className="system-card orbit-card top-card">
            <span>Assess</span>
            <small>Business input</small>
          </div>
          <div className="system-card orbit-card right-card">
            <span>Build</span>
            <small>Practical tools</small>
          </div>
          <div className="system-card orbit-card bottom-card">
            <span>Automate</span>
            <small>Repeated work</small>
          </div>
          <div className="system-card orbit-card left-card">
            <span>Improve</span>
            <small>Team adoption</small>
          </div>
          <div className="implementation-core">
            <span className="core-kicker">RexTexh OS</span>
            <strong>Workflow → AI → Software</strong>
            <div className="core-lines">
              {statusItems.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <SectionHeader eyebrow="You might need RexTexh if..." title="You know AI could help, but you are not sure where it fits yet.">
          Many businesses are interested in AI, but the hard part is knowing what to do with it. RexTexh helps turn that uncertainty into a clear plan, then builds the systems that make the plan useful.
        </SectionHeader>
        <div className="pain-grid">
          {painPoints.map((point) => (
            <article key={point.title} className="surface-card">
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-section" id="how-it-works">
        <SectionHeader eyebrow="How RexTexh works" title="From unclear AI idea to working business system.">
          AI becomes valuable when it is connected to a real business problem. RexTexh helps you understand the workflow, choose the right solution, build it properly, and improve it after people start using it.
        </SectionHeader>
        <div className="method-grid">
          {methodBlocks.map(([num, title, copy]) => (
            <article className="method-step" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilities-section" id="services">
        <SectionHeader eyebrow="What we help with" title="Practical AI support across the work your business already does.">
          RexTexh brings strategy, software, automation, and education together so your business can use AI in ways that are understandable, useful, and built around real operations.
        </SectionHeader>
        <div className="capability-stack">
          {capabilities.map(([title, copy, example, outcome]) => (
            <article className="capability-row" key={title}>
              <div>
                <p className="row-label">Capability</p>
                <h3>{title}</h3>
              </div>
              <div>
                <p>{copy}</p>
                <p className="muted-line">{example}</p>
                <p className="outcome-line">{outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section console-section">
        <div className="console-copy">
          <SectionHeader eyebrow="Implementation in practice" title="What a RexTexh engagement can look like.">
            You do not need to arrive with a perfect technical brief. You can start with a business problem, a messy workflow, or a simple feeling that AI should be helping somewhere.
          </SectionHeader>
        </div>
        <div className="workflow-console" aria-label="Example RexTexh engagement console">
          <div className="console-bar"><span /><span /><span /></div>
          <div className="console-block">
            <p className="row-label">Business input</p>
            <strong>“We spend too much time preparing weekly reports, chasing updates, and copying information between tools.”</strong>
          </div>
          <div className="console-block response-block">
            <p className="row-label">RexTexh system response</p>
            <p>Map the workflow, identify repeated steps, decide what should be automated, and design a practical system around the team’s current tools.</p>
          </div>
          <ul className="progress-list">
            {['Reviewed the reporting process', 'Identified repeated manual steps', 'Mapped the tools and data sources', 'Designed an automation workflow', 'Prepared a build plan for review'].map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="completion-bar">Clear next step ready → Book a Call</div>
        </div>
      </section>

      <section className="section proof-section" id="why-rextexh">
        <SectionHeader eyebrow="Why RexTexh" title="Practical thinking before complicated technology.">
          RexTexh is built for businesses and builders who want AI to be useful, not confusing. The approach is simple: understand the problem clearly, explain the options plainly, build what makes sense, and help people use it well.
        </SectionHeader>
        <div className="proof-grid">
          {['We start with the work, not the tool', 'We explain before we build', 'We build for real use'].map((title, index) => (
            <article key={title} className="surface-card proof-card">
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{index === 0 ? 'The goal is not to force AI into everything. The goal is to find the parts of your business where better systems can save time, improve clarity, or create leverage.' : index === 1 ? 'If the solution is too hard to understand, it will be hard to trust. RexTexh keeps the process clear so you know what is being built and why it matters.' : 'A good AI system should support real decisions, real teams, and real workflows — not just look impressive in a demo.'}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pathway-section">
        <SectionHeader eyebrow="Choose your path" title="Start from where you are now." />
        <div className="pathway-grid">
          {pathways.map(([title, copy, cta]) => (
            <article className="pathway-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={cta.includes('Learn') ? '#learn' : cta.includes('services') ? '#services' : '#book-a-call'}>{cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section learn-section" id="learn">
        <SectionHeader eyebrow="Learn with RexTexh" title="Practical AI learning connected to real implementation.">
          RexTexh also supports people who want to understand AI more clearly. Through Prompt-to-Code with Rex, tutorials, guides, learning paths, and mentoring can become part of a structured learning journey — not just random content.
        </SectionHeader>
        <div className="learning-grid">
          {learningPaths.map(([title, copy]) => (
            <article className="surface-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <a className="secondary-button centered" href="#learn">Explore Learn</a>
      </section>

      <section className="final-cta" id="book-a-call">
        <p className="eyebrow">Start the right conversation</p>
        <h2>Know AI could help, but not sure what to build first?</h2>
        <p>That is a good place to start. Book a call to talk through your workflow, your goals, and the parts of your business where AI, automation, software, or training could make the most practical difference.</p>
        <div className="hero-actions centered-actions">
          <a className="primary-button" href="mailto:hello@rextexh.com?subject=RexTexh%20Discovery%20Call">Book a Call</a>
          <a className="secondary-button" href="#services">Explore Services</a>
          <a className="secondary-button" href="#learn">Explore Learn</a>
        </div>
        <div className="prompt-grid">
          {bookingPrompts.map((prompt) => <span key={prompt}>{prompt}</span>)}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Link className="brand-mark" href="/" aria-label="RexTexh home"><span className="crown-glyph" aria-hidden="true">◆</span><span>RexTexh</span></Link>
          <p>RexTexh helps businesses and builders use AI to save time, improve workflows, build custom tools, and develop practical capability.</p>
          <strong>Useful AI. Clear workflows. Practical systems.</strong>
        </div>
        <div className="footer-links">
          <div><h3>Company</h3>{['Home', 'Services', 'Learn', 'About', 'Book a Call'].map((item) => <a key={item} href={item === 'Home' ? '/' : `#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}</div>
          <div><h3>Services</h3>{['AI Implementation', 'Software & Product Builds', 'Automation Systems', 'Internal Assistants & Agents', 'Advisory & Training'].map((item) => <a key={item} href="#services">{item}</a>)}</div>
          <div><h3>Learn</h3>{['Learning paths', 'Tutorials', 'Mentoring', 'Prompt-to-Code with Rex'].map((item) => <a key={item} href="#learn">{item}</a>)}</div>
        </div>
      </footer>
    </main>
  );
}
