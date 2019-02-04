import brainTn from './Brain_tn.jpg';
import handTn from './Hand_tn.jpg';
import gutTn from './Gut_tn.jpg';
import brain from './Brain.jpg';
import hand from './Hand.jpg';
import gut from './Gut.jpg';


const initialData = [
  {
    id: 1,
    organ: "brain",
    title: "Headquartered in the Nerve Centre",
    image: brain,
    thumbnail: brainTn,
    quotation: "'It is certainly now common knowledge that the brain, even although a physical organ, bears some intimate relation to the mind; and this knowledge is manifestly embodied in common idiom. When referring to admittedly mental happenings or conditions we speak of racking one’s brains, picking another’s brains, having it on the brain, having a good brain or, contrariwise, being all brawn and no brain; and so on.' - CV Borst",
    bottom: 715,
    left: 110,
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
    },
    ]
  },
  {
    id: 2,
    organ: "hand",
    title: "Manoeuvre, Manufacture, Manipulate",
    image: hand,
    thumbnail: handTn,
    quotation: "'Possession of a fully developed hand profoundly transformed the relationship of the human being to its own body, thus altering the relationship between humans and the natural world. The interaction of the hand with the rest of the body brought about self-consciousness and laid the foundations for the unique sense of agency that is experienced by humans.' - of Raymond Tallis",
    bottom: 650,
    left: 250,
    tabs: [
      {name: "The Body Politic", content: "blah"},
      {name: "Out of Body Experience", content: "blah2"},
      {name: "Corpus Delicti", content: "blah3"},
      {name: "Foreign Body", content: "blah4"},
      {name: "The Body Text", content: "blah5"},
    ]
  },
  {
    id: 3,
    organ: "gut",
    title: "A Hunger and an Instinct",
    image: gut,
    thumbnail: gutTn,
    quotation: `'Embedded in the expression "gut feeling" is the notion that the gut is the first part of the body to respond to the environment, producing an emotional sixth sense that governs rational thought processes. This concept is not so foreign to our current physiological models in which the intestinal tract from mouth to anus is described as an exterior organ that mediates between the outside world and the internal viscera, with the intestinal epithelium providing an immunological gateway between self and other.' - M Mathias and AM Moore`,
    bottom: 960,
    left: 60,
    tabs: [
      {name: "The Body Politic", content: "blah"},
      {name: "Out of Body Experience", content: "blah2"},
      {name: "Corpus Delicti", content: "blah3"},
      {name: "Foreign Body", content: "blah4"},
      {name: "The Body Text", content: "blah5"},
    ]
  }
]

export default initialData
