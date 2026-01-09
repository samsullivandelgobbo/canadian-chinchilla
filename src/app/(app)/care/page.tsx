import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Chinchilla Care Guide",
  description:
    "Complete guide to caring for your chinchilla including housing, diet, temperature, health, behavior, and everything you need to know.",
};

export default function CarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Chinchilla <span className="text-primary">Care Guide</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Chinchillas are wonderful, unique companions that can live 15-20
            years with proper care. They&apos;re playful, curious, and form strong
            bonds with their owners. But they also have very specific needs that
            differ significantly from other small pets.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This guide covers everything you need to know to give your
            chinchilla a happy, healthy life. Whether you&apos;re considering
            adoption or already have a chinchilla at home, understanding their
            needs is the foundation of good care.
          </p>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="px-4 py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Quick Reference
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p><strong>Lifespan:</strong> 15-20 years</p>
              <p><strong>Temperature:</strong> 60-70°F (never above 75°F)</p>
              <p><strong>Humidity:</strong> Below 50%</p>
              <p><strong>Diet:</strong> Unlimited hay + 1-2 tbsp pellets daily</p>
            </div>
            <div className="space-y-3">
              <p><strong>Dust baths:</strong> 2-3 times per week</p>
              <p><strong>Exercise:</strong> 1-2 hours supervised playtime daily</p>
              <p><strong>Cage minimum:</strong> 30&quot; x 18&quot; x 30&quot; (bigger is better)</p>
              <p><strong>Social needs:</strong> Thrive with companionship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Chinchillas */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Understanding Chinchillas
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas are crepuscular rodents native to the Andes Mountains of
            South America, where they live at elevations of 10,000-16,000 feet.
            This high-altitude origin shapes nearly every aspect of their care
            requirements. The cool, dry mountain air they evolved in means they
            cannot tolerate heat or humidity—conditions that would never occur
            in their natural habitat.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Perhaps their most remarkable feature is their fur. Chinchillas have
            the densest fur of any land mammal, with up to 80 hairs growing from
            a single follicle (humans have just one). This incredible coat kept
            them warm in the frigid Andes nights, but it also means they
            overheat easily and cannot get wet—their fur is simply too dense to
            dry properly.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            In the wild, chinchillas are social animals living in herds called
            &quot;colonies.&quot; They&apos;re prey animals, which influences their behavior:
            they&apos;re naturally cautious, startle easily, and prefer to have
            hiding spots available. They&apos;re also most active at dawn and dusk,
            so don&apos;t be surprised if your chinchilla seems sleepy during the day
            and full of energy in the evening.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas are intelligent and can learn their names, come when
            called, and even learn simple tricks. They communicate through a
            variety of sounds—from soft chirps when content to loud barks when
            alarmed. Each chinchilla has a distinct personality; some are bold
            and adventurous, others more reserved and cautious.
          </p>
        </div>
      </section>

      {/* Temperature - The Critical Factor */}
      <section className="px-4 py-16 md:py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Temperature: The Most Critical Factor
          </h2>

          <Alert className="mb-8 border-destructive/50 bg-destructive/5">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-destructive">
              <strong>Heat kills chinchillas.</strong> This is not an
              exaggeration. If you cannot maintain temperatures below 75°F
              year-round, a chinchilla is not the right pet for you.
            </AlertDescription>
          </Alert>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Temperature control is the single most important aspect of
            chinchilla care, and it&apos;s non-negotiable. The ideal temperature
            range is <strong className="text-foreground">60-70°F (15-21°C)</strong>. Temperatures above 75°F
            (24°C) can cause heat stroke, which can be fatal within hours.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Because of their incredibly dense fur, chinchillas cannot cool
            themselves effectively. They don&apos;t sweat, and panting isn&apos;t an
            efficient cooling mechanism for them. Their large ears help
            dissipate some heat, but it&apos;s not nearly enough in warm conditions.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">The Temperature + Humidity Rule</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Here&apos;s a critical formula to remember: the temperature in Fahrenheit
            plus the humidity percentage should never exceed 150. For example,
            if it&apos;s 70°F, humidity should stay below 80%. If it&apos;s 75°F, humidity
            needs to be below 75%. High humidity makes it even harder for
            chinchillas to regulate their body temperature.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Air Conditioning is Mandatory</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            If you live anywhere that experiences warm summers, air conditioning
            isn&apos;t optional—it&apos;s required. Even in cooler climates, you need a
            backup plan for power outages or AC failures. Some owners keep
            granite or marble tiles in the freezer that chinchillas can lie on
            in emergencies, but these are temporary measures only.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Placement Matters</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">Keep your chinchilla&apos;s cage:</p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>Away from windows and direct sunlight</li>
            <li>Away from heating vents and radiators</li>
            <li>In an interior room if possible (more stable temperature)</li>
            <li>Away from kitchens and other heat-generating areas</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Signs of Overheating</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Learn to recognize heat stress immediately. Signs include: red ears,
            drooling, lethargy, lying flat and stretched out, rapid breathing,
            and in severe cases, unconsciousness. If you see these signs, move
            your chinchilla to the coolest area possible and contact an
            emergency vet immediately. You can place them on a cool (not cold)
            tile, but never submerge them in water.
          </p>
        </div>
      </section>

      {/* Housing */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Housing Your Chinchilla
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas need space to jump, climb, and explore. In the wild,
            they traverse rocky terrain and can jump up to 6 feet. Your cage
            should accommodate this natural athleticism.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Cage Size</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            The absolute minimum cage size for a single chinchilla is{" "}
            <strong className="text-foreground">30&quot; wide x 18&quot; deep x 30&quot; tall</strong>, but we strongly
            recommend going larger. Height is particularly important since
            chinchillas love to climb and jump. A cage that&apos;s 4-5 feet tall with
            multiple levels is ideal.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            For two chinchillas, increase the minimum to at least 36&quot; x 24&quot; x
            36&quot;. Remember: bigger is always better when it comes to cages.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Cage Features</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Bar spacing</strong> should be no more than 1 inch, and
            ideally ½ inch, especially for younger chinchillas who can squeeze
            through surprisingly small gaps.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Solid surfaces</strong> are essential. Wire floors and
            shelves can cause bumblefoot (a painful foot condition) and can
            catch toes and legs. Use wooden shelves, fleece-covered platforms,
            or solid metal pans.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Multi-level design</strong> with platforms at varying
            heights lets chinchillas exercise their jumping instincts. Space
            ledges so jumps are no more than 12-18 inches to prevent injuries.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Recommended Cages</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            The <strong className="text-foreground">Critter Nation</strong> and{" "}
            <strong className="text-foreground">Ferret Nation</strong> cages by Midwest Homes
            for Pets are the gold standard for chinchilla housing. They offer excellent
            bar spacing, full-width double doors for easy cleaning, and can be stacked
            for more vertical space. They&apos;re readily available from major retailers
            like Amazon and Chewy, with replacement parts easily sourced.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <em>Note: We previously recommended Quality Cage Crafters, but as of 2024
            they appear to have stopped fulfilling orders while continuing to accept payments.
            Read our{" "}
            <Link href="/blog/quality-cage-crafters-warning" className="text-primary hover:underline">
              full report on Quality Cage Crafters
            </Link>{" "}
            before considering any purchase from them.</em>
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Avoid aquariums (poor ventilation) and small &quot;starter&quot; cages
            marketed for chinchillas—they&apos;re almost always too small.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Inside the Cage</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">Every chinchilla cage needs:</p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Hiding house</strong> - A wooden house or hidey-hole where they can retreat and feel safe</li>
            <li><strong className="text-foreground">Exercise wheel</strong> - Minimum 15&quot; diameter with a solid running surface (no rungs or mesh)</li>
            <li><strong className="text-foreground">Water bottle</strong> - Glass bottles are preferred as chinchillas will chew through plastic</li>
            <li><strong className="text-foreground">Hay rack or feeder</strong> - To keep hay clean and accessible</li>
            <li><strong className="text-foreground">Food dish</strong> - Heavy ceramic or one that attaches to the cage to prevent tipping</li>
            <li><strong className="text-foreground">Ledges and platforms</strong> - For climbing and jumping. Kiln-dried pine or poplar wood is safe</li>
            <li><strong className="text-foreground">Chew toys</strong> - Essential for dental health</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Bedding</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            For the cage floor, kiln-dried pine shavings or aspen shavings work
            well. Avoid cedar (toxic) and any scented beddings. Many owners use
            fleece liners, which are washable and economical long-term, but they
            require frequent changing to stay clean and dry.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Cage Placement</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Beyond temperature considerations, place the cage in a relatively
            quiet area away from TVs, stereos, and high-traffic zones.
            Chinchillas have sensitive hearing. However, they do enjoy being
            part of family life—a quiet corner of a living room often works well
            once they&apos;re adjusted.
          </p>
        </div>
      </section>

      {/* Diet & Nutrition */}
      <section className="px-4 py-16 md:py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Diet & Nutrition
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas have a sensitive digestive system that&apos;s adapted to a
            high-fiber, low-fat, low-sugar diet. In the wild, they eat grasses,
            bark, and other tough plant materials. Domestic chinchillas thrive
            on a simple diet that mimics this—but simplicity here is a feature,
            not a limitation.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">The Foundation: Hay</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Unlimited timothy hay</strong> should make up the bulk of
            your chinchilla&apos;s diet—roughly 80%. Hay provides essential fiber for
            digestive health and keeps their continuously-growing teeth worn
            down. Your chinchilla should always have fresh hay available.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Timothy hay is the gold standard. You can also offer orchard grass,
            botanical hay, or oat hay for variety. Avoid alfalfa hay for adult
            chinchillas—it&apos;s too high in calcium and protein. Alfalfa is only
            appropriate for pregnant females, nursing mothers, or chinchillas
            under 6 months old.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Pellets</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Feed <strong className="text-foreground">1-2 tablespoons</strong> of high-quality chinchilla
            pellets daily. Look for pellets that are:
          </p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>16-20% protein</li>
            <li>2-4% fat (no more than 3.5% ideally)</li>
            <li>18-20%+ fiber</li>
            <li>Plain pellets only—no mixes with seeds, dried fruit, or treats</li>
          </ul>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Recommended brands include Oxbow Essentials Chinchilla Food, Mazuri
            Chinchilla Diet, and Tradition Chinchilla Food. Stick with one brand
            rather than switching frequently, as sudden diet changes can cause
            digestive upset.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Water</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Fresh, clean water should always be available. Use a glass water
            bottle (chinchillas chew plastic) and check daily that it&apos;s
            functioning properly. Change the water every day or two, even if it
            doesn&apos;t look empty.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Treats</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Treats should be given sparingly—no more than a teaspoon total per
            day, and not every day. Safe treats include:
          </p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>Plain shredded wheat (1 piece)</li>
            <li>Plain cheerios (2-3 pieces)</li>
            <li>Rosehips (1-2)</li>
            <li>Dried hibiscus flowers</li>
            <li>Old-fashioned rolled oats (a pinch)</li>
            <li>Goji berries (1, occasionally)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Foods to Absolutely Avoid</h3>

          <Alert className="my-6 border-destructive/50 bg-destructive/5">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription>
              The following foods are dangerous for chinchillas and should never
              be fed, even in small amounts.
            </AlertDescription>
          </Alert>

          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Fresh fruits and vegetables</strong> - Too much water and sugar; can cause bloat and diarrhea</li>
            <li><strong className="text-foreground">Nuts and seeds</strong> - Too high in fat</li>
            <li><strong className="text-foreground">Dried fruits</strong> - Far too much sugar</li>
            <li><strong className="text-foreground">Corn</strong> - Cannot be digested properly</li>
            <li><strong className="text-foreground">Dairy products</strong> - Chinchillas are lactose intolerant</li>
            <li><strong className="text-foreground">Bread, crackers, human snacks</strong> - Wrong nutrition profile</li>
            <li><strong className="text-foreground">Chocolate, caffeine</strong> - Toxic</li>
            <li><strong className="text-foreground">&quot;Yogurt drops&quot; and commercial treats</strong> - Despite being sold for chinchillas, most are full of sugar</li>
          </ul>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            The biggest mistake new owners make is wanting to &quot;treat&quot; their
            chinchilla with variety. Chinchillas genuinely thrive on a simple,
            consistent diet. The hay and pellets they eat every day are not
            boring to them—they&apos;re exactly what their bodies need.
          </p>
        </div>
      </section>

      {/* Dust Baths */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dust Baths
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            One of the most delightful aspects of chinchilla ownership is
            watching them take dust baths. They roll, flip, and shimmy with
            obvious joy—and it&apos;s not just adorable, it&apos;s essential for their
            health.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Why Dust, Not Water?</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Remember that incredibly dense fur? It&apos;s so thick that if it gets
            wet, it won&apos;t dry properly. Moisture trapped against the skin can
            cause fungal infections, fur rot, and serious health problems.{" "}
            <strong className="text-foreground">Never bathe a chinchilla in water.</strong>
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Dust baths work differently. The fine volcanic dust absorbs oils and
            moisture from the fur, keeping it clean, fluffy, and healthy. In the
            wild, chinchillas roll in volcanic ash; domestic chinchilla dust
            replicates this.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Dust Bath Routine</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Offer dust baths <strong className="text-foreground">2-3 times per week</strong> for about 10-15
            minutes each session. In humid climates, you may need to offer baths
            more frequently; in very dry climates, less often. Over-bathing can
            dry out their skin.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Use a container large enough for your chinchilla to roll around in
            freely. Many owners use a &quot;bathhouse&quot; (an enclosed container with an
            entrance), which helps contain the dust. Fish bowls, large jars
            turned on their sides, or commercial chinchilla bath houses all work
            well.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Fill the container with about 1-2 inches of dust. You can reuse dust
            for several baths—sift out any droppings and add fresh dust as
            needed. Replace the dust entirely every few weeks or if it starts to
            look clumpy or dirty.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Choosing Dust</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Use only dust specifically made for chinchillas. The best options
            are Blue Cloud or Blue Sparkle chinchilla dust. Avoid &quot;sand&quot; or
            products meant for other animals—the particle size matters for
            effectiveness and respiratory health.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Remove the bath after the session is over. Leaving it in the cage
            leads to overuse (they&apos;ll keep bathing), potential bathroom use, and
            unnecessary dust in the air.
          </p>
        </div>
      </section>

      {/* Exercise & Enrichment */}
      <section className="px-4 py-16 md:py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Exercise & Enrichment
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas are active, athletic animals. In the wild, they cover
            significant terrain, jumping between rocks and running from
            predators. A cage, no matter how large, can&apos;t fully replicate this.
            Regular exercise and enrichment are essential for their physical and
            mental health.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Playtime Outside the Cage</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Aim for <strong className="text-foreground">1-2 hours of supervised playtime</strong> outside
            the cage daily, ideally in the evening when they&apos;re most active.
            This is when you&apos;ll really see your chinchilla&apos;s personality shine
            as they explore, jump, and play.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            The key word here is &quot;supervised.&quot; Chinchillas are escape artists
            and chewers. They will find and chew electrical cords, squeeze into
            impossibly small spaces, nibble on furniture, and generally cause
            chaos if left unsupervised.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Chinchilla-Proofing a Room</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">Before playtime, make sure the room is safe:</p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Cover or remove all cords</strong> - Electrical cords are extremely dangerous</li>
            <li><strong className="text-foreground">Block access behind furniture</strong> - They will get back there and you will not get them out easily</li>
            <li><strong className="text-foreground">Remove houseplants</strong> - Many are toxic</li>
            <li><strong className="text-foreground">Close windows and doors</strong> - Including closet doors</li>
            <li><strong className="text-foreground">Check for small spaces</strong> - Under doors, behind appliances, etc.</li>
            <li><strong className="text-foreground">Remove or protect anything valuable</strong> - They will chew it</li>
            <li><strong className="text-foreground">Keep other pets out</strong> - Even &quot;friendly&quot; cats and dogs</li>
          </ul>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Many owners create a dedicated &quot;chinchilla-proof&quot; room or use a
            large playpen area. A bathroom can work well (toilet lid down,
            chemicals removed) as it&apos;s easy to clean and has fewer hiding spots.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Exercise Wheel</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            A proper exercise wheel is essential cage furniture. The wheel must
            be at least <strong className="text-foreground">15 inches in diameter</strong>—anything smaller
            forces their spine to curve unnaturally. The running surface should
            be solid (no rungs or mesh that can trap feet).
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Popular options include the Chin Spin, Silver Surfer, and similar
            solid-surface, large-diameter wheels. Many chinchillas will run for
            hours, especially at night.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Mental Enrichment</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas are intelligent and need mental stimulation. Provide:
          </p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Chew toys</strong> - A necessity for dental health and entertainment</li>
            <li><strong className="text-foreground">Tunnels and tubes</strong> - Cardboard tubes (untreated), PVC pipes, wooden tunnels</li>
            <li><strong className="text-foreground">Rearrange the cage</strong> - Moving ledges and toys around periodically provides novelty</li>
            <li><strong className="text-foreground">Foraging opportunities</strong> - Hide hay or treats for them to find</li>
            <li><strong className="text-foreground">Interaction with you</strong> - Many chinchillas enjoy being talked to, held, and played with</li>
          </ul>
        </div>
      </section>

      {/* Dental Health & Chewing */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dental Health & Chewing
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Like all rodents, chinchillas have teeth that grow continuously
            throughout their lives. Unlike us, they need to constantly wear
            their teeth down, or they&apos;ll develop painful dental problems that
            can prevent eating and become life-threatening.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">The Importance of Chewing</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            This is why unlimited hay is so important—the constant chewing
            action wears down their teeth naturally. But chinchillas also need
            wooden chew toys to gnaw on. This isn&apos;t optional enrichment; it&apos;s a
            health requirement.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Safe Wood for Chewing</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Safe woods include kiln-dried pine, poplar, aspen, apple, pear,
            willow, and birch. Always ensure wood is untreated, unpainted, and
            free of pesticides. Many pet stores sell chinchilla-safe wood toys,
            and you can also purchase from online vendors who specialize in
            small animal supplies.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Woods to avoid:</strong> Cedar (toxic), fresh or
            green/undried wood, treated wood, plywood, MDF, and any wood of
            unknown origin.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Signs of Dental Problems</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">Watch for these warning signs:</p>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>Drooling or wet fur around the mouth</li>
            <li>Dropping food while eating (&quot;slobbers&quot;)</li>
            <li>Weight loss</li>
            <li>Reduced appetite or difficulty eating</li>
            <li>Pawing at the mouth</li>
            <li>Visible changes in tooth alignment</li>
          </ul>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Dental problems require veterinary care. An exotic vet can trim
            overgrown teeth or address malocclusion (misaligned teeth). Caught
            early, most dental issues are manageable.
          </p>
        </div>
      </section>

      {/* Health & Common Issues */}
      <section className="px-4 py-16 md:py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Health & Common Issues
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            With proper care, chinchillas are generally healthy animals. However,
            knowing what problems can occur—and what&apos;s normal versus concerning—helps
            you catch issues early.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Signs of a Healthy Chinchilla</h3>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>Bright, clear eyes</li>
            <li>Clean, dry nose</li>
            <li>Soft, fluffy fur without bald patches</li>
            <li>Active and alert during evening hours</li>
            <li>Good appetite and regular eating</li>
            <li>Firm, dry, pellet-shaped droppings</li>
            <li>Steady weight (weigh weekly to track)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Common Health Issues</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">GI Stasis:</strong> A slowdown or stoppage of the digestive
            system. Signs include reduced or absent droppings, loss of appetite,
            and lethargy. This is an emergency—chinchillas can deteriorate
            rapidly without gut movement. Seek vet care immediately.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Dental Problems:</strong> As discussed above, overgrown or
            misaligned teeth are common. Regular hay consumption and chew toys
            help prevent issues.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Fur Rings:</strong> In males, fur can wrap around the penis
            inside the sheath, causing pain and potentially serious problems.
            Check male chinchillas regularly (your vet can show you how).
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Respiratory Infections:</strong> Sneezing, discharge from
            nose or eyes, labored breathing, or wheezing all warrant vet
            attention. Chinchillas can develop pneumonia, which is very serious.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Fungal Infections:</strong> Hair loss in patches, especially
            around the nose, ears, or feet, may indicate ringworm or other
            fungal infections. These are treatable but require diagnosis and
            medication.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Heat Stroke:</strong> Red ears, drooling, lethargy, and
            lying flat are emergency signs. Move the chinchilla to a cool area
            and seek immediate vet care.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Finding an Exotic Vet</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Not all veterinarians are experienced with chinchillas. Before you
            bring a chinchilla home, locate an <strong className="text-foreground">exotic animal veterinarian</strong> or
            a vet who specializes in small mammals. Ask specifically about their
            experience with chinchillas.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Establish a relationship with this vet before emergencies happen.
            Annual wellness checks are recommended, and having a vet who knows
            your chinchilla&apos;s baseline health is invaluable if problems arise.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">When to Seek Emergency Care</h3>

          <Alert className="my-6 border-destructive/50 bg-destructive/5">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription>
              Contact an emergency vet immediately if your chinchilla shows:
              not eating for 12+ hours, no droppings for 12+ hours, labored
              breathing, extreme lethargy, signs of pain, or any symptoms of
              heat stroke.
            </AlertDescription>
          </Alert>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas hide illness well (a prey animal instinct), so by the
            time symptoms are obvious, the situation may be serious. When in
            doubt, call your vet. It&apos;s always better to check and be reassured
            than to wait too long.
          </p>
        </div>
      </section>

      {/* Behavior & Socialization */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Behavior & Socialization
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Understanding chinchilla behavior helps you build a trusting
            relationship with your pet and recognize when something might be
            wrong.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Normal Behaviors</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Popcorning:</strong> Sudden, explosive jumps and bounces,
            often against walls. This is a sign of happiness and excitement—one
            of the most endearing chinchilla behaviors.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Wall surfing:</strong> Running along vertical surfaces,
            bouncing off walls. Another sign of a happy, energetic chinchilla.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Fur slip:</strong> When frightened or handled roughly,
            chinchillas can release a patch of fur. This is a defense mechanism
            against predators. The fur grows back, but it&apos;s a sign of stress.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Barking:</strong> A sharp, loud alarm call. Usually means
            they&apos;re startled or warning of perceived danger.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Chirping/Cooing:</strong> Soft sounds indicating contentment.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Teeth chattering:</strong> Can mean they&apos;re content, or if
            aggressive, a warning. Context matters.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Spraying urine:</strong> Females especially may spray when
            annoyed or defensive. Not pleasant, but normal.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Building Trust</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas aren&apos;t typically cuddly pets right away—trust must be
            earned over time. Start by simply sitting near the cage, talking
            softly. Offer treats from your hand. Let them come to you rather
            than grabbing at them.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Some chinchillas become very affectionate with patient owners;
            others remain more independent. Respect their personality. Even a
            chinchilla that doesn&apos;t want to be held can enjoy interaction and
            playtime on their own terms.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Handling</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            When picking up a chinchilla, support their body firmly but gently.
            Never grab them by the tail (it can break off) or squeeze them.
            Scoop under their body and support their hindquarters. Many
            chinchillas prefer to sit on your hand or arm rather than being
            clutched.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Keep handling sessions short at first, especially with a new
            chinchilla. End on a positive note before they become stressed.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Single vs. Pairs</h3>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas are social animals and often do well in pairs or small
            groups—but not always. Same-sex pairs (two males or two females) who
            are properly bonded can be wonderful companions for each other.
            However, introductions must be done carefully; chinchillas who don&apos;t
            get along can seriously injure each other.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            A single chinchilla can live a happy life with sufficient human
            interaction and enrichment. If you&apos;re considering adding a second
            chinchilla, research proper bonding procedures thoroughly or seek
            guidance from experienced owners.
          </p>
        </div>
      </section>

      {/* Supplies Checklist */}
      <section className="px-4 py-16 md:py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Supplies Checklist
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Before bringing a chinchilla home, make sure you have everything ready.
            Here&apos;s what you&apos;ll need:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Essential</h3>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>Large, multi-level cage with proper bar spacing</li>
            <li>Exercise wheel (15&quot;+ diameter, solid surface)</li>
            <li>Glass water bottle</li>
            <li>Food dish (heavy ceramic or cage-mounted)</li>
            <li>Hay rack or feeder</li>
            <li>Wooden hiding house</li>
            <li>Kiln-dried pine or aspen bedding (or fleece liners)</li>
            <li>Timothy hay (buy in bulk to save money)</li>
            <li>Quality chinchilla pellets</li>
            <li>Chinchilla dust</li>
            <li>Dust bath container</li>
            <li>Wooden ledges and platforms</li>
            <li>Chew toys (apple sticks, wooden toys, pumice)</li>
            <li>Thermometer for monitoring room temperature</li>
            <li>Air conditioning (or reliable way to keep room cool)</li>
            <li>Carrier for vet visits</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Recommended</h3>
          <ul className="list-disc list-inside my-4 space-y-2 text-muted-foreground">
            <li>Kitchen scale for weekly weigh-ins</li>
            <li>Extra water bottles (backup)</li>
            <li>Variety of safe chew toys</li>
            <li>Fleece hammocks and tunnels</li>
            <li>Playpen for out-of-cage time</li>
            <li>Granite or marble tile for cooling (emergencies)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Ongoing Costs</h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Plan for monthly expenses including hay, pellets, bedding, and
            occasional supplies like dust and chew toys. Set aside funds for
            veterinary care—exotic vet visits can be expensive, and emergencies
            happen.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Lifetime Commitment
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Chinchillas can live 15-20 years—that&apos;s longer than most dogs. When
            you adopt a chinchilla, you&apos;re committing to care for them through
            moves, life changes, and whatever else comes your way. It&apos;s a
            significant commitment, but for those who make it, the reward is a
            fascinating, beautiful, and entertaining companion.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            Every chinchilla who comes through our rescue has their own story,
            personality, and quirks. Some came from homes where their needs
            weren&apos;t understood; others from owners whose circumstances changed.
            All of them deserve the chance to live out their long lives in homes
            where they&apos;re properly cared for and loved.
          </p>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            If you have questions about chinchilla care that aren&apos;t answered
            here, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              reach out to us
            </Link>
            . We&apos;re always happy to help, whether you&apos;re considering adoption or
            already have a chinchilla at home. And if you&apos;re ready to give a
            chinchilla a forever home,{" "}
            <Link href="/adopt" className="text-primary hover:underline">
              meet our available chinchillas
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
