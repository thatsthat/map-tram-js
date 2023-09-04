import haversine from "haversine-distance";

const t2Track = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "T2",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [2.143213748931885, 41.39220368769343],
          [2.142226921743178, 41.391957725649426],
          [2.14102415213053, 41.39165088698834],
          [2.139821382517882, 41.39134404687898],
          [2.138618612905233, 41.39103720532132],
          [2.1374158432925845, 41.39073036231539],
          [2.1365260375697086, 41.39050591363671],
          [2.136213073679936, 41.39042351786119],
          [2.1354138851165776, 41.39021963214674],
          [2.134210188803245, 41.389914837422474],
          [2.1330064924899115, 41.38961004126928],
          [2.1319514186323696, 41.38934483758997],
          [2.1318027961765784, 41.3893052436871],
          [2.130599099863245, 41.38900044467596],
          [2.129395403549912, 41.38869564423588],
          [2.128191707236579, 41.38839084236682],
          [2.1269880109232457, 41.388086039068824],
          [2.1265119463635207, 41.387961764061295],
          [2.1257843146099127, 41.38778123434187],
          [2.1245806182965796, 41.38747642818598],
          [2.123376921983246, 41.38717162060111],
          [2.122173225669913, 41.386866811587325],
          [2.1216035243859737, 41.38672380292537],
          [2.12096952935658, 41.38656200114458],
          [2.119888990588517, 41.386288376508794],
          [2.1186844698909653, 41.385985402054295],
          [2.11847412088404, 41.38593547975739],
          [2.1174799491934135, 41.38568242618804],
          [2.116275428495862, 41.38537944891002],
          [2.1150709077983096, 41.38507647022027],
          [2.1146214008331303, 41.38496340328225],
          [2.1144658327102666, 41.384882906428],
          [2.114310264587403, 41.384802409474105],
          [2.114299535751343, 41.38468971357125],
          [2.1142888069152836, 41.384577017473056],
          [2.1144229173660283, 41.38426710219593],
          [2.1146157216812815, 41.38383609313557],
          [2.1149426364472794, 41.38309516035572],
          [2.1151436769146934, 41.38264547917496],
          [2.1153447173821065, 41.38219579488455],
          [2.1153485105984675, 41.38205633520075],
          [2.115352303814828, 41.381916875217875],
          [2.1151664362128986, 41.381467185889164],
          [2.114980568610969, 41.38101749345084],
          [2.1148359775543217, 41.38075127157315],
          [2.114817460307226, 41.380718645490276],
          [2.1146543520034826, 41.380419796156424],
          [2.1144836572670167, 41.38022625490278],
          [2.1143129625305512, 41.380032713073156],
          [2.114100542414055, 41.37987047903692],
          [2.1138881222975585, 41.37970824459599],
          [2.11359225142102, 41.379540317292296],
          [2.113296380544481, 41.37937238955498],
          [2.1130915468607063, 41.37927277120084],
          [2.1128867131769318, 41.37917315269409],
          [2.112594635516754, 41.37882875610944],
          [2.112302557856576, 41.37848435770109],
          [2.1118511651090155, 41.37797487241373],
          [2.1113997723614553, 41.37746538313529],
          [2.111168386163134, 41.37718644318041],
          [2.1109369999648124, 41.37690750202926],
          [2.1107912063598637, 41.37669183059408],
          [2.110637335871912, 41.376460624426436],
          [2.1103376717790123, 41.376013743753305],
          [2.110250427802589, 41.37597674075738],
          [2.110163183826166, 41.37593973774042],
          [2.108893117707786, 41.37596190603159],
          [2.1076230515894054, 41.375984074315205],
          [2.107433080673218, 41.375987390149135],
          [2.1064487099647526, 41.37604978375363],
          [2.105941772460938, 41.37607997418592],
          [2.105464339256287, 41.37611217729825],
          [2.1041990790121177, 41.37619792255637],
          [2.1029338187679483, 41.37628366770143],
          [2.102197408676148, 41.37633357326404],
          [2.1009328231805333, 41.376424750970614],
          [2.099668237684919, 41.37651592854939],
          [2.0984154939651494, 41.376603272786],
          [2.0984036521893046, 41.37660710600034],
          [2.09713906669369, 41.37669828332347],
          [2.095874481198075, 41.37678946051882],
          [2.094609895702461, 41.37688063758633],
          [2.0935177803039555, 41.37696555396589],
          [2.093345310206846, 41.37697181452604],
          [2.0920807247112316, 41.37706299133794],
          [2.0908161392156175, 41.377154168022],
          [2.0906053602431562, 41.37716936518513],
          [2.0900591370864507, 41.37719498217638],
          [2.0895129139297453, 41.37722059915752],
          [2.0894180835206, 41.377217752826795],
          [2.089323253111455, 41.377214906495915],
          [2.0890956601294945, 41.37709251415086],
          [2.088868067147534, 41.3769701215755],
          [2.0886468887329106, 41.37684076845397],
          [2.0883497821699586, 41.376667949615076],
          [2.0878314971923833, 41.37636577625081],
          [2.08741843700409, 41.376100101133005],
          [2.0870053768157963, 41.375834424930055],
          [2.086554765701295, 41.37539162884692],
          [2.0861041545867924, 41.374948829749464],
          [2.085345642732942, 41.374184079343365],
          [2.0845871308790924, 41.37341931994627],
          [2.0839798450469975, 41.37279919856828],
          [2.083828619025242, 41.37265455155821],
          [2.0830701071713924, 41.37188977417921],
          [2.082311595317542, 41.37112498780928],
          [2.0818809626013928, 41.37069078883792],
          [2.081167625776515, 41.3699018868655],
          [2.080943584442139, 41.36964305704074],
          [2.0804542889516373, 41.36911297532666],
          [2.080151255938532, 41.36877783448215],
          [2.0800602187457473, 41.36866396637778],
          [2.079969181552963, 41.368550098074095],
          [2.0797567614364665, 41.368379295244935],
          [2.0795443413199703, 41.368208491967344],
          [2.0787777219236587, 41.367448228823],
          [2.078011102527347, 41.36668795679497],
          [2.0774201401550045, 41.36610188134224],
          [2.07667350769043, 41.36533129481901],
          [2.0766692258053063, 41.365332815869586],
          [2.075918311455608, 41.364563741307016],
          [2.0751673971059104, 41.36379465765457],
          [2.074416482756212, 41.36302556491226],
          [2.0736655684065144, 41.36225646308012],
          [2.072914654056816, 41.361487352158186],
          [2.0726877450942998, 41.36125277311515],
          [2.072163739707118, 41.36071823214646],
          [2.0719275628570615, 41.36047632739029],
          [2.0715103090568103, 41.35997524231748],
          [2.071093055256559, 41.35947415338658],
          [2.0707665545981895, 41.35877303669147],
          [2.07044005393982, 41.358071912443485],
          [2.0703059434890756, 41.35787461343334],
          [2.07018256187439, 41.35769744646558],
          [2.0701718330383305, 41.3576773138251],
          [2.0698499679565434, 41.357435721653516],
          [2.0695281028747563, 41.357194128585164],
          [2.0693188905715947, 41.3570733317147],
          [2.069109678268433, 41.356952534620056],
          [2.0688790082931523, 41.356884082833595],
          [2.0686483383178715, 41.35681563097513],
          [2.0683211088180546, 41.35677939172677],
          [2.0679938793182377, 41.35674315245826],
          [2.0678061246871953, 41.35668275363257],
          [2.067618370056153, 41.356622354750826],
          [2.0672214031219487, 41.356469343999564],
          [2.0668244361877446, 41.35631633288862],
          [2.0667064189910898, 41.35630827966231],
          [2.066588401794434, 41.35630022643498],
          [2.066465020179749, 41.35632841272626],
          [2.066341638565064, 41.35635659900533],
          [2.0660573244094853, 41.356654567494715],
          [2.0659017562866215, 41.35683173730121],
          [2.065461874008179, 41.35730687212866],
          [2.06518828868866, 41.35756859745885],
          [2.064914703369141, 41.35783032173661],
          [2.0642817020416264, 41.35841416440985],
          [2.0636487007141118, 41.35899800184574],
          [2.0633614482864875, 41.359260278546486],
          [2.063074195858863, 41.35952255419029],
          [2.0622734723576532, 41.36026284318954],
          [2.06219494342804, 41.360330742161906],
          [2.0614727488564437, 41.3610031237681],
          [2.0606720253552337, 41.3617433959259],
          [2.060601711273194, 41.36180840118066],
          [2.0597875809760713, 41.362540380316595],
          [2.058973450678949, 41.36327235121917],
          [2.0585417747497563, 41.36366046047057],
          [2.058498859405518, 41.363720852820855],
          [2.0584559440612797, 41.36378124511508],
          [2.058485448360444, 41.36393423867626],
          [2.0585149526596074, 41.364087231877754],
          [2.058547139167786, 41.364191911229405],
          [2.058579325675965, 41.364296590412664],
          [2.0587617158889775, 41.364538157115945],
          [2.058796584606171, 41.364592509500596],
          [2.0590138435363774, 41.364888427242775],
          [2.05919623374939, 41.365115900510695],
          [2.059378623962403, 41.365343372983396],
          [2.0596787776333207, 41.365679925747166],
          [2.0599789313042383, 41.36601647677018],
          [2.060145832824343, 41.366201519867964],
          [2.0603127343444476, 41.3663865624395],
          [2.0606844695483066, 41.366665548706386],
          [2.061056204752166, 41.366944533777044],
          [2.06152277036519, 41.36718081611559],
          [2.0619893359782138, 41.36741709759605],
          [2.062245025616976, 41.36753971841803],
          [2.0625007152557377, 41.3676623390089],
          [2.06294596195221, 41.36779116803144],
          [2.063069343566895, 41.36782740114805],
          [2.063637971878052, 41.36799246286846],
          [2.063895463943482, 41.3680246699846],
          [2.0641529560089116, 41.36805687708477],
          [2.064641118049622, 41.36803674764901],
          [2.0651292800903325, 41.36801661820705],
          [2.0659285783767705, 41.36798843697784],
          [2.0667278766632085, 41.367960255736385],
          [2.067366242408753, 41.36802064409594],
          [2.0680046081542973, 41.36808103239944],
          [2.069034576416016, 41.368185705326084],
          [2.070064544677735, 41.36829037808432],
          [2.0705366134643564, 41.368455438630164],
          [2.0710086822509775, 41.36862049875722],
          [2.0711696147918706, 41.36866880895909],
          [2.0716202259063725, 41.368817765189064],
          [2.072231769561768, 41.3690150310228],
          [2.0729184150695805, 41.36926060602085],
          [2.073605060577393, 41.36950618009194],
          [2.074152231216431, 41.369719546974956],
          [2.074699401855469, 41.36993291315817],
          [2.0750051736831674, 41.370073814970986],
          [2.0753109455108647, 41.37021471647864],
          [2.0754879713058476, 41.37033146321098],
          [2.075664997100831, 41.37044820973383],
          [2.0757722854614262, 41.3705488531198],
          [2.075879573822022, 41.370649496350104],
          [2.076078057289124, 41.3708990908894],
          [2.076183551619715, 41.37102953530953],
          [2.076276540756226, 41.3711486844711],
        ],
      },
    },
  ],
};

const t2StopNames = [
  "FRANCESC MACIA",
  "L'ILLA",
  "NUMANCIA",
  "MARIA CRISTINA",
  "PIUS XII",
  "PALAU REIAL",
  "Z. UNIVERSITARIA",
  "AVINGUDA DE XILE",
  "ERNEST LLUCH",
  "CAN RIGAL",
  "CA N'OLIVERES",
  "CAN CLOTA",
  "PONT D'ESPLUGUES",
  "LA SARDANA",
  "MONTESA",
  "EL PEDRO",
  "IGNASI IGLESIAS",
  "CORNELLA CENTRE",
  "LES AIGUES",
  "FONTSANTA-FATJO",
  "BON VIATGE",
  "LA FONTSANTA",
  "C.M. MARTI I POL",
  "LLEVANT-PLANES",
];

const t2StopCoords = [
  [2.143213748931885, 41.39220368769343],
  [2.1365260375697086, 41.39050591363671],
  [2.1319514186323696, 41.38934483758997],
  [2.1265119463635207, 41.387961764061295],
  [2.1216035243859737, 41.38672380292537],
  [2.11847412088404, 41.38593547975739],
  [2.1144229173660283, 41.38426710219593],
  [2.1148359775543217, 41.38075127157315],
  [2.1107912063598637, 41.37669183059408],
  [2.105941772460938, 41.37607997418592],
  [2.0984154939651494, 41.376603272786],
  [2.0935177803039555, 41.37696555396589],
  [2.0886468887329106, 41.37684076845397],
  [2.0839798450469975, 41.37279919856828],
  [2.080943584442139, 41.36964305704074],
  [2.07667350769043, 41.36533129481901],
  [2.0726877450942998, 41.36125277311515],
  [2.07018256187439, 41.35769744646558],
  [2.0660573244094853, 41.356654567494715],
  [2.06219494342804, 41.360330742161906],
  [2.0587617158889775, 41.364538157115945],
  [2.06294596195221, 41.36779116803144],
  [2.0711696147918706, 41.36866880895909],
  [2.076183551619715, 41.37102953530953],
];

const trackCoords = t2Track.features[0].geometry.coordinates;

// Array indicating the distance between track points
const t2Distances = new Array(trackCoords.length - 2);
t2Distances.fill(0);

trackCoords.forEach((item, ind, arr) => {
  if (ind != 0) {
    t2Distances[ind - 1] = haversine(arr[ind], arr[ind - 1]);
  }
});

// Boolean array indicating the positions in the track that correspond to a stop
const t2IsStop = new Array(trackCoords.length - 1);
t2IsStop.fill(false);

const trackLat = trackCoords.map((pos) => pos[0]);
const t2StopLat = t2StopCoords.map((pos) => pos[0]);

t2StopLat.forEach((item) => {
  t2IsStop[trackLat.indexOf(item)] = true;
});

// Arrays indicating the distance to the origin stop
const t2DistA = new Array(trackCoords.length - 1);
t2DistA.fill(0);

let distSinceLastStop = 0;
t2DistA.forEach((item, ind, arr) => {
  if (t2IsStop[ind]) {
    distSinceLastStop = 0;
  } else {
    distSinceLastStop += t2Distances[ind];
    arr[ind] = distSinceLastStop;
  }
});

const t2DistR = new Array(trackCoords.length - 1);
t2DistR.fill(0);
const t2IsStopRev = t2IsStop.toReversed();
const t2DistancesRev = t2Distances.toReversed();
t2DistR.forEach((item, ind, arr) => {
  if (t2IsStopRev[ind]) {
    distSinceLastStop = 0;
  } else {
    distSinceLastStop += t2DistancesRev[ind];
    arr[ind] = distSinceLastStop;
  }
});

const t2 = {
  track: t2Track,
  stopNames: t2StopNames,
  stopPos: t2StopCoords,
  isStop: t2IsStop,
  distA: t2DistA,
  distR: t2DistR,
};

export default t2;
