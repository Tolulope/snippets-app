import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "addToLiked":
        if (state.liked.includes(action.payload)) return state;
        let newLiked = state.liked;
        newLiked.push(action.payload);
        return { ...state, liked: newLiked };
    case "removeFromLiked":
        let newRemoveLiked = state.liked;
        newRemoveLiked = newRemoveLiked.filter(snippet => snippet !== action.payload);
        return { ...state, liked: newRemoveLiked };
    case "addToInProgress":
        if (state.inProgress.includes(action.payload)) return state;
        let newInProgress = state.inProgress;
        newInProgress.push(action.payload);
        return { ...state, inProgress: newInProgress };
    case "removeFromInProgress":
        let newRemoveInProgress = state.inProgress;
        newRemoveInProgress = newRemoveInProgress.filter(snippet => snippet !== action.payload);
        return { ...state, inProgress: newRemoveInProgress };
    case "addToCompleted":
        if (state.completed.includes(action.payload)) return state;
        let newCompleted = state.completed;
        newCompleted.push(action.payload);
        return { ...state, completed: newCompleted }; 
    default:
      return state;
  }
};

const addToLiked = (dispatch) =>  ({ snippet }) => {
    dispatch({ type: "addToLiked", payload: snippet });
};

const addToInProgress = (dispatch) =>  ({ snippet }) => {
    dispatch({ type: "addToInProgress", payload: snippet });
};

const removeFromInProgress = (dispatch) =>  ({ snippet }) => {
    dispatch({ type: "removeFromInProgress", payload: snippet });
};

const removeFromLiked = (dispatch) =>  ({ snippet }) => {
    dispatch({ type: "removeFromLiked", payload: snippet });
};

const addToCompleted = (dispatch) =>  ({ snippet }) => {
    dispatch({ type: "addToCompleted", payload: snippet });
};

export const { Provider, Context } = createDataContext(
  reducer,
  { addToLiked, removeFromLiked, addToCompleted, addToInProgress, removeFromInProgress },
  { 
    data: [
        {
        name: "Pets in Need", 
        subtitle1: "Translate",
        subtitle2: "English, Mandarin",
        allowed: 60,
        estimated: 5,
        url: require('../assets/img/pets-in-need.jpeg'),
        who: "Pets in Need is a non-profit animal shelter, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations.",
        what: "Your mission, should you choose to accept is, to read and translate a document from English to Mandarin. Full professional proficiency or native / bilingual proficiency would be required.",
        original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
        },
        {
        name: "Old Weather", 
        subtitle1: "Transcribe",
        subtitle2: "English",
        allowed: 65,
        estimated: 12,
        url: require('../assets/img/old_weather.jpeg'),
        who: "Old Weather volunteers explore, mark, and transcribe historic ship's logs from the 19th and early 20th centuries. We need your help because this task is impossible for computers, due to diverse and idiosyncratic handwriting that only human beings can read and understand effectively.",
        what: "Your mission, should you choose to accept is, to transcribe the historic ship’s logs below. The logs are images of hand-written words in English and we hope you could transcribe them into texts.",
        original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
        },
        {
        name: "Endangered SI", 
        subtitle1: "Summarize",
        subtitle2: "English",
        allowed: 68,
        estimated: 14,
        url: require('../assets/img/endangered_species_international.gif'),
        who: "Endangered Species International is strongly committed to reversing the trend of human-induced species extinction, saving endangered animals, and preserving wild places! We protect more than 225 endangered species, created no fewer than 46 protected areas protecting rainforests, coral reefs, and wetlands, planted thousands of native and rare trees to restore back forest, and empowered tribes and much more.",
        what: "Your mission, should you choose to accept is, to summarize the following paragraphs into one sentence per paragraph.",
        original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
        },
        {
        name: "Japantown NA", 
        subtitle1: "Video",
        subtitle2: "Japanese",
        allowed: 40,
        estimated: 8,
        url: require('../assets/img/japantown_neighborhood_association.jpeg'),
        who: "The Japantown Neighborhood Association's mission is to encourage communication and cooperation between residents and businesses in the Japantown neighborhood; to serve as a voice and representative for the residents with government officials, nongovernment agencies, and business representatives; and to support and encourage the continued diversity of the Japantown neighborhood and surrounding areas.",
        what: "Your mission, should you choose to accept is, to add Japanese subtitles for the following 5-minute video..",
        original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
        },
        {
        name: "Mercy House", 
        subtitle1: "TV Show",
        subtitle2: "Brain Storm",
        allowed: 10,
        estimated: 80,
        url: require('../assets/img/mercyhousing.jpeg'),
        who: "Mercy Housing is redefining affordable, low-income housing. We’re a national nonprofit organization that is working to build a more humane world where communities are healthy and all people can develop their full potential. Mercy Housing is one of the nation’s largest affordable housing organizations. We participate in the development, preservation, management and/or financing of affordable, program-enriched housing across the country. We acquire and renovate existing housing, as well as develop new affordable rental properties.",
        what: "Your mission, should you choose to accept is,  to brain storm game ideas for our the Live At-Home Variety Show we hold every month!.",
        original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
        },
        {
        name: "RISE", 
        subtitle1: "Screen Applications",
        subtitle2: "Academic Skills",
        allowed: 90,
        estimated: 12,
        url: require('../assets/img/RISE.png'),
        who: "RISE was founded because we firmly believe that children living in the East Palo Alto community deserve the same opportunities as those in neighboring communities. RISE serves to close the education and opportunity gaps that exist between East Palo Alto and its neighboring communities. We empower our youth to create their own vision for the future and foster their self-confidence to make it happen. It is our intention that students leave RISE feeling proud of their accomplishments and eager to inspire future generations to make a lasting impact on their community.",
        what: "Your mission, should you choose to accept is,  to screen applications from people who would like to be mentors and work with students one-on-one and in small groups to improve their academic skills, with a focus on reading and math. Please pick out the applications that you find fit and tell us what you think..",
        original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
        },
    ],
    liked: [], 
    inProgress: [],
    completed: []
    }
);
