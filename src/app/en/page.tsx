import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EnglishHome() {
  return (
    <>
      <Header />

      <section id="hero">
        <div className="hero-container">
          <h2>MINIMUM JOURNEY</h2>
          <p>Enjoy deck building and pick your lucks!</p>
        </div>
      </section>

      <section id="about">
        <div className="content-container">
          <h2>About</h2>
          <p>In this world, space exploring requires cost performance! Please enjoy deck building and pick your lucks!</p>
        </div>
      </section>

      <section id="rule">
        <div className="content-container">
          <h2>Rule</h2>
          <h3>Story</h3>
          <div className="rounded-box">
            <p>In the year 2XXX, a meteorite impact nearly wiped out the humans. Researchers engaged in space development were also affected, and it seemed that human space development had ended. One hundred years later, however, humans have made a dramatic recovery and are enjoying peace. Scientists of the new era began to develop space exploration ships to effectively use the legacy of space development left behind by their predecessors. The space race was restarted here, with each country&apos;s national prestige on the line.</p>
            <p>You are the astronauts entrusted with the space exploration ships of your countries. You need to build superior spacecraft faster than other countries and collect relics. If you are too lazy to build your spacecraft, other countries will beat you to it. However, the short-range exploration ship will be unable to find valuable relics. Which nation will be the first to utilize the recovered relics and enter an unprecedented realm? Let&apos;s seize the upper hand in the space development race of the new era with MINIMUM JOURNEY.</p>
          </div>

          <h3>Rough Rule</h3>
          <img src="/images/rule_en.png" alt="simple rule" className="responsive-image" />
          <ol className="rounded-box-text">
            <li>Get exploration power by drawing from your deck!</li>
            <li>Please be cautious of many draws due to reducing the exploration power!</li>
            <li>Strengthen your deck by acquiring stronger cards!</li>
            <li>Game is finished if any player acquire the strongest card! A player which has the largest points win the game!</li>
          </ol>

          <h3>Detailed Rule</h3>
          <p>Detailed rule is downloaded from <a href="https://www.dropbox.com/scl/fi/7o449e1zv1rrgoa06ha1a/minimum_journey_rulebook_en.pdf?rlkey=mgfxtplvbwf4tpywnzggbafsb&dl=0">the link</a>!</p>
          <p>This rulebook includes card lists. All card effects are indicated by icons and are language-independent with repeated play.</p>
        </div>
      </section>

      <section id="reservation">
        <div className="content-container">
          <h2>Reservation</h2>
          <p>Reservation of Game Market 2024 Autumn is started!</p>
          <p>You can reserve from <a href="https://forms.gle/1CSSiS7bTSsFa1eR8">the reservation form</a>!</p>
        </div>
      </section>

      <section id="contact">
        <div className="content-container">
          <h2>Contact</h2>
          <p>Please feel free to ask questions to the following e-mail.</p>
          <p>Email: danjiri.concerto at gmail.com</p>
        </div>
      </section>

      <Footer />
    </>
  );
}