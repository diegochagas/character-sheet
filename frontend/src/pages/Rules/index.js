/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

// import { Container } from './styles';

function Rules() {
  return (
    <div className="rules">
      <div>
        <h1>Rules</h1>

        <p>
          <b>
            This webpage is based on the brasillian RPG: 3D&T - Defensores de
            Tóquio 3a Edição (Tokyo Defenders 3rd Edition)
          </b>
        </p>
      </div>

      <div>
        <h2>The numbers</h2>

        <b>
          <p>
            Strength, Skills, Constitution, Armor and Firepower. These five
            characteristics are measured by numbers, which form the fundamental
            basis of a 3D&T character. They are its basic attributes.
          </p>

          <p>
            The characteristics tell what your hero is capable of doing. Great
            Force allows to do more damage with punches and kicks. Greater
            Skills improves your chances of hitting a hit. And with a high
            Constitution you have more chance to survive injuries.
          </p>

          <p>
            A value of 0 in a characteristic means that characteristic is
            “normal” for a human being - almost everyone in the world have 0 in
            their characteristics. Values above 0 are worthy of great
            adventurers, powerful heroes or inhuman creatures.
          </p>
        </b>

        <div>
          <h3>Strength</h3>

          <p>
            Strength is your ability to lift weight, push and pull things, and
            cause damage with punches, kicks and blows with weapons. The
            Strength will be added to your Skills to determine your Attack Force
            when you fight melee. This because the greater your Strength, the
            greater the damage you inflict in close combat - that is, attacks
            against targets that are within reach of your hands or feet.
          </p>

          <p>
            A character can also use his Strength to do things that involve
            physical effort, like breaking down doors, pushing cars, carrying
            weight ...
          </p>

          <p>
            Often, however, the Strength does not exactly mean brute force - but
            the damage you (or your weapons) inflict. So, it&apos;s possible
            that a truculent giant have Strength 3 and a little ninja girl with
            very sharp weapons has Strength 4. If need to do things like lift a
            truck, which requires brute force, that same little ninja girl can
            “simulate” brute force with maneuvers and blows from her weapons
            (say that she uses her sword and strikes the truck to get it out of
            place).
          </p>

          <p>
            The source of your Strength can be anything: your own muscles, an
            arm bionic, a magic ring, a tentacle that emerges from the ground
            whenever you need ... invent whatever you want. This has no special
            effect in terms of the game.
          </p>
        </div>

        <div>
          <h3>Skills</h3>

          <p>
            The most important of the features - we do not recommend that any
            character have less than 2 points on it. Skill corresponds to
            agility, speed and, in certain level, to the character&apos;s
            intelligence. You use the Skill for impressive acts, courageous and
            superhuman, like fighting, jumping out of buildings, grabbing
            helicopters in the middle of air and things like that. A character
            with Skill 0 is an ordinary person with no athletic or combat
            training: it is very difficult for him to fight or perform great
            exploits.
          </p>

          <p>
            Skills is added to the Force to discover the Attack Force in bodily
            attacks, or added to Firepower for ranged attacks. Skills is also
            added to Armor to calculate your Defense Force.
          </p>
        </div>

        <div>
          <h3>Constitution</h3>

          <p>
            This is the constitution, the physical vigor of the character. The
            greater your Constitution, the more injuries you can suffer before
            you die. High strength also helps a character tolerating poisons,
            diseases and other health-damaging agents.
          </p>

          <p>
            Although it is more linked to the vitality of the body, the
            Resistance also measures its determination, willpower and mental
            power.
          </p>

          <p>Resistance also determines your Hit Points.</p>
        </div>

        <div>
          <h3>Armor</h3>

          <p>
            It represents the bodily protection of the character. Despite the
            name, it doesn&apos;t have to be a “Armor” in the literal sense; can
            be your own leather or shell, a shield, field of strength, or just
            blocking ability. So, an apparently fragile little girl may have a
            powerful energetic, magical or psychic shield that counts as Armor
            5!
          </p>

          <p>
            When a character receives an attack, he adds his Skills to the Armor
            to determine your Defense Force. In certain cases, if you are
            surprised or unable to move, only the Armor will be valid for your
            DF.
          </p>
        </div>

        <div>
          <h3>Firepower</h3>

          <p>
            When the target is beyond the range of punches and kicks, the
            character can only rely on ranged attacks. This ability is
            represented by Firepower.
          </p>

          <p>
            As with the Strength, the Firepower will be added to your Skills to
            determine your Attack Force when you do a ranged attack.
          </p>

          <p>
            Again, the source of this Firepower depends on the player&apos;s
            imagination - and here, as in games and anime, literally anything is
            worth. You can shoot fireballs, rocks, knives, playing cards, tree
            leaves, water jets, purple light, an image in the shape of a flaming
            dragon ... it makes no difference some. Whichever form of attack is
            chosen, its effect will be only visual. The actual damage depends of
            the numerical value of your Firepower.
          </p>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th />
              <th>Strength</th>
              <th>Skills</th>
              <th>Constitution</th>
              <th>Armor</th>
              <th>Firepower</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="td-char-value">0</td>
              <td>
                Average for normal people. With a lot of effort, you can lift
                100 kg
              </td>
              <td>Average for normal people</td>
              <td>Average for normal people. 1 HP</td>
              <td>
                No protection. Not counting your Skills, any damage will hurt
                you
              </td>
              <td>
                You attack from a distance with improvised weapons like sticks
                and stones
              </td>
            </tr>
            <tr>
              <td className="td-char-value">1</td>
              <td>The strength of a gorilla; you can lift up to 350 kg</td>
              <td>The agility, speed and intelligence of a deca-athlete</td>
              <td>You have perfect health. 5 HP</td>
              <td>
                Bulletproof vest. You can protect yourself from underpowered
                attacks
              </td>
              <td>Equivalent to an arrow, revolver or other light weapon</td>
            </tr>
            <tr>
              <td className="td-char-value">2</td>
              <td>
                You are MUCH stronger than a gorilla! Can lift up to 900 kg
              </td>
              <td>You can juggle five knives and blindfolds</td>
              <td>
                You survive injuries that would kill a normal person. 10 HPs
              </td>
              <td>Heavy robotic armor</td>
              <td>Machine gun</td>
            </tr>
            <tr>
              <td className="td-char-value">3</td>
              <td>You can lift up to 2,000 kg (a small car)</td>
              <td>
                You can run through walls, and jump so high and far that you can
                almost fly
              </td>
              <td>
                You&apos;re one of those martial artists that takes hours to
                fall. 15 HPs
              </td>
              <td>Armoured car</td>
              <td>Bazooka</td>
            </tr>
            <tr>
              <td className="td-char-value">4</td>
              <td>
                You can lift up to 5,000 kg (one big car or two small ones)
              </td>
              <td>
                You produce masterpieces and decipher great mysteries in minutes
              </td>
              <td>
                You ignore shots without stopping to eat your sandwich. 20 HPs
              </td>
              <td>Tank armor</td>
              <td>Tank Cannon</td>
            </tr>
            <tr>
              <td className="td-char-value">5</td>
              <td>You can lift up to 10,000 kg (a lot of cars)</td>
              <td>
                You are difficult to defeat; rarely fails to perform an attack
                or dodge
              </td>
              <td>Your enemies need to look for more ammo. 25 HPs</td>
              <td>You make enemies doubt whether their weapons really work</td>
              <td>Dragon Breath</td>
            </tr>
            <tr>
              <td className="td-char-value">6</td>
              <td>You lift up to 20 tons.</td>
              <td>
                Normal speed of 60km / h, maximum speed of 60m / shift (200km /
                h). If you have Levitation, normal speed of 120km / h, maximum
                speed of 700m / shift (mach 2, twice the speed of sound).
              </td>
              <td>Immune to all natural diseases.</td>
              <td>---</td>
              <td>It amounts to throwing 20 tons (about ten cars).</td>
            </tr>
            <tr>
              <td className="td-char-value">10</td>
              <td>You lift 150 tons (the weight of a blue whale).</td>
              <td>
                In flight, normal speed of 1,000 km / h, maximum speed of 10 km
                / shift (escape speed; the minimum necessary to reach space).
                This is the maximum possible speed within the Earth&apos;s
                atmosphere.
              </td>
              <td>
                Immune to all poisons and magical diseases (lican tropia, mummy
                disease ...).
              </td>
              <td>---</td>
              <td>
                Able to destroy any building or civil structure, not armored or
                prepared to take so much damage.
              </td>
            </tr>
            <tr>
              <td className="td-char-value">15</td>
              <td>---</td>
              <td>
                Normal speed of 50,000,000 km / h (Mars in one hour, or
                Pluto&apos;s orbit in six weeks), maximum speed of 50,000 km /
                shift.
              </td>
              <td>Immune to curses (except those demanded by gods).</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td className="td-char-value">20</td>
              <td>You lift 20,000 tons (the weight of Godzilla).</td>
              <td>
                Normal speed of 1c (speed of light; Sun in eight minutes,
                Pluto&apos;s orbit in five hours, Alpha Centaur in four years);
                maximum speed of 2c.
              </td>
              <td>
                You are considered immortal, even if you do not have this
                advantage.
              </td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td className="td-char-value">30</td>
              <td>
                You lift 100,000 tons (the weight of an aircraft carrier).
              </td>
              <td>
                Normal speed of 128c (or Space Warp 6; cruising speed for
                starships). Alpha Centaur in fifteen days; center of the Galaxy
                in 9 months; maximum speed of 256c (Fold 7).
              </td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td className="td-char-value">40</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                Able to destroy a large asteroid (Ceres) or a small moon
                (Phobos, Deimos ...).
              </td>
            </tr>
            <tr>
              <td className="td-char-value">50</td>
              <td>---</td>
              <td>---</td>
              <td>
                You can regenerate, in turn, half of the Hit Points you
                currently have, or a minimum of 50 HP.
              </td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td className="td-char-value">60</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                Able to destroy a large moon (the Moon, Io, Europa, Ganymede,
                Callisto ...) or a small planet (Mercury, Pluto ...).
              </td>
            </tr>
            <tr>
              <td className="td-char-value">100</td>
              <td>---</td>
              <td>---</td>
              <td>
                You cannot be destroyed. You can always regenerate, unless your
                body receives damage continuously and is kept with 0 Life Points
                at all times (in an acid tank, for example).
              </td>
              <td>---</td>
              <td>
                Able to destroy an average planet (Earth, Mars, Venus ...).
              </td>
            </tr>
            <tr>
              <td className="td-char-value">300</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                Able to destroy a giant planet (Jupiter, Saturn, Neptune ...).
              </td>
            </tr>
            <tr>
              <td className="td-char-value">1000</td>
              <td>
                You lift more than 5 sextillion tons (the weight of planet
                Earth). That is, if you have anywhere to step ...
              </td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>Able to destroy a star.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Dices</h2>

        <p>
          Many role-playing games use special, multifaceted data that is
          different from common data that we know. They are called d4, d8, d10,
          d12 and even d20.
        </p>

        <p>
          You don&apos;t have to worry about that, because 3D&T uses only normal
          data six-sided, or d6. Let&apos;s just call it “d”.
        </p>

        <p>
          When a number appears before “d”, it indicates the number of times
          that the dice must be rolled. So “3d” means that you must roll the
          dice three times (or roll three dice) and add the numbers obtained.
          The possible results in a 3d scroll range from 3 (1 + 1 + 1) to 18 (6
          + 6 + 6).
        </p>

        <p>
          When a number appears after the “d”, it will always be accompanied an
          arithmetic sign “+” or “-”. Let&apos;s say it&apos;s 1d + 3. That
          means that you must roll a dice and add 3 to the result. In this case
          you will achieve at least 4 (1 + 3) and a maximum of 9 (6 + 3).
        </p>

        <p>
          The same goes for subtractions. When you see something like 2d – 1,
          you should roll two data and subtract 1 from the result. In this case,
          the minimum will be 1 (1 + 1–1) and the maximum, 11 (6 + 6–1). But be
          careful, a roll never results in less than 1. So, if you roll 1d – 3
          and takes a 2 on the die, the result will be 1 (not –1).
        </p>

        <p>
          On this wepage, the dice is rolled automatically when you run a fight.
        </p>
      </div>

      <div>
        <h2>Fight</h2>

        <p>
          Combat is the most important part of this game - after all, we&apos;re
          talking about adventures that contain manga, anime and games heroes!
          In 3D&T, as in all others RPGs, combats are decided through a series
          of tests: the combatants throw dice and, according to the results,
          they manage to cause more or less damage to the opponent.
        </p>

        <p>
          Obviously, the higher the characteristics of a character, the greater
          its chances to win. This does not mean that it is impossible for a
          weak hero to win a fight. It will just be more difficult.
        </p>
      </div>

      <div>
        <h2>Combat turn</h2>

        <b>
          <p>
            Step 1 • Initiative: each combatant rolls a dice and adds to the
            result your Skills. Fighters with higher initiative act first. In
            the event of a tie, higher Skills fighters act first. If there is
            still a tie, it will be choose randomly.
          </p>

          <p>
            Step 2 • Attack Force (AF): characters choose their targets and make
            their attacks or maneuvers, each on his own initiative. The Attack
            Force of each will be equal to Skills + Strenght + 1d (for melee
            attacks) or Skills + Firepower + 1d (for attacks to distance), at
            the player&apos;s choice. This choice must be made before scrolling.
            Example: a fighter with Skills 4, Strength 3 and Firepower 1 rolls a
            dice and gets a 2. He will have an Attack Force 9 (4 + 3 + 2) to
            attack melee and AF 7 (4 + 1 + 2) to attack from a distance.
          </p>

          <p>
            Step 3 • Defense Force (DF): the victim&apos;s Defense Force will be
            equal to Skills + Armor + 1d. Subtract that attacker&apos;s DF
            value. The end result will be the amount of hit Points lost by the
            victim.
          </p>

          <p>
            Example: an attacker with Skills 2 and Strength 3 rolls a dice, gets
            a 5 and attacks with AF 10. Your target has Skills 2, Armor 1 and
            rolls a 3, defending with DF 6. 10–6 = 4. The victim lose 4 hit
            points for this attack.
          </p>

          <p>
            If the target&apos;s final DF is equal to or greater than the
            attacker&apos;s final AF, no damage is done.
          </p>
        </b>
      </div>

      <div>
        <h2>Dodge</h2>

        <p>
          When a character receives an attack he can, at the same time (before
          roll your Defense Force), try to dodge.
        </p>

        <p>
          Dodge is achieved with a successful Skill check. This test suffers a
          penalty equal to the attacker&apos;s Skills. For example, Skills – 2
          if the attacker has Skills 2.
        </p>

        <p>
          Often avoidance will be impossible. For example, a victim with Skills
          2 can never dodge an attacker with Skills 2 or higher. In this case,
          the victim just doesn&apos;t get tested.
        </p>

        <p>
          <b>Attention:</b> each attack received only allows one attempt. After
          failing a time, you cannot make new dodge attempts for the same attack
          - just for other attacks. When failing a dodge, your DF against this
          attack is calculated as Armor + 1d, not including Skills (it was
          already &quot;used&quot; in the dodge attempt).
        </p>
      </div>

      <div>
        <h2>Critical hit</h2>

        <p>
          When rolling the dice to determine your Attack Force or Defense Force,
          if you get a result 6, this will have been a critical hit.
        </p>

        <p>Double your Strength or Firepower for AF, or Armor for DF.</p>

        <p>
          <b>Example 1:</b> an attacker with Strenght 4 and Skills 2 rolls a 6,
          getting a critic. Your final AF will be 8 (for Strenght 4 x 2) + 2
          (for Skills 2) + 6 (for the dice roll), total AF 16.
        </p>

        <p>
          <b>Example 2:</b> after suffering an attack, a victim with Armor 3 and
          Skills 5 rolls 6, a critic. Your Final DF will be 6 (for Armor 3 x 2)
          + 5 (for Skills 5) + 6 (for dice roll), total DF 17
        </p>
      </div>
    </div>
  );
}

export default Rules;
