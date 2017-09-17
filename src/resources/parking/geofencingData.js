'use strict';

var parkingAreas = [
    {
        parkingAreaName: 'parkingArea1',
        coordinates: [
            [28.351849978, -81.592264228],
            [28.351166010, -81.592186579],
            [28.350953863, -81.591626312],
            [28.350749051, -81.591218823],
            [28.350237146, -81.590812334],
            [28.349701805, -81.590378026],
            [28.349327851, -81.589871814],
            [28.349151844, -81.589125170],
            [28.349067286, -81.588386896],
            [28.349015484, -81.587787093],
            [28.349012326, -81.587107470],
            [28.349046771, -81.586356248],
            [28.349180020, -81.585503138],
            [28.349259151, -81.585090643],
            [28.349386191, -81.584514737],
            [28.349699089, -81.584137897],
            [28.350194876, -81.583953934],
            [28.351170909, -81.583968800],
            [28.351597841, -81.584078633],
            [28.352076530, -81.584518049],
            [28.352443160, -81.584863817],
            [28.352960315, -81.585452525],
            [28.353025089, -81.586054442],
            [28.353036061, -81.586523996],
            [28.353052099, -81.587105890],
            [28.353181312, -81.587797017],
            [28.353386240, -81.588301613],
            [28.353790562, -81.588959989],
            [28.353559294, -81.589273583],
            [28.353129472, -81.589453853],
            [28.352700661, -81.589702696],
            [28.352929925, -81.589978885],
            [28.352562311, -81.591459373],
            [28.352678649, -81.591605379],
            [28.352528880, -81.592199715],
            [28.351849978, -81.592264228]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        coordinates: [
            [28.354045197, -81.574168836],
            [28.353807607, -81.574257006],
            [28.353617575, -81.574136464],
            [28.353316457, -81.573859106],
            [28.353006170, -81.573425226],
            [28.353114742, -81.573330958],
            [28.353288162, -81.573187420],
            [28.353494058, -81.572870708],
            [28.353715000, -81.572384524],
            [28.353904468, -81.571978580],
            [28.354161681, -81.571442701],
            [28.354302448, -81.571238799],
            [28.354467272, -81.571144695],
            [28.354636946, -81.571143759],
            [28.354874460, -81.571198317],
            [28.354972082, -81.571418572],
            [28.354987178, -81.571662510],
            [28.354968083, -81.572009813],
            [28.355002153, -81.572261893],
            [28.355107905, -81.572562055],
            [28.355262308, -81.572885832],
            [28.355314900, -81.573067085],
            [28.355333838, -81.573284916],
            [28.355115532, -81.573502024],
            [28.354779477, -81.573730863],
            [28.354363316, -81.574126136],
            [28.354045197, -81.574168836]
        ]
    }

];

var characterAreas = [
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        coordinates: [
            [28.350890793, -81.588664026],
            [28.349168224, -81.588688554],
            [28.349131700, -81.588460174],
            [28.349083310, -81.587747740],
            [28.349082613, -81.586918541],
            [28.349175677, -81.586026837],
            [28.349255509, -81.585362744],
            [28.349397956, -81.584717644],
            [28.349601784, -81.584313360],
            [28.349823024, -81.584169784],
            [28.350135292, -81.584073817],
            [28.350506793, -81.584074164],
            [28.350915660, -81.584073085],
            [28.351083402, -81.584077452],
            [28.351093260, -81.584359399],
            [28.350986988, -81.584737880],
            [28.350873627, -81.585264816],
            [28.350784387, -81.585737537],
            [28.350850289, -81.586213817],
            [28.350997512, -81.586592242],
            [28.351163505, -81.587087819],
            [28.351189078, -81.587344911],
            [28.351009943, -81.587952893],
            [28.350912810, -81.588326318],
            [28.350890793, -81.588664026]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Donald',
        coordinates: [
            [28.351785872, -81.589834717],
            [28.351323695, -81.590531192],
            [28.350901791, -81.591190907],
            [28.350627664, -81.591069727],
            [28.350338078, -81.590807908],
            [28.350059372, -81.590551602],
            [28.349810750, -81.590322990],
            [28.350118860, -81.589817920],
            [28.350365937, -81.589412935],
            [28.350559142, -81.589104664],
            [28.350865766, -81.588692119],
            [28.351246992, -81.589276471],
            [28.351557013, -81.589612827],
            [28.351785872, -81.589834717]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Pluto',
        coordinates: [
            [28.352527024, -81.591480113],
            [28.352631408, -81.591610468],
            [28.352501728, -81.592226493],
            [28.352351854, -81.592224146],
            [28.352080277, -81.592219739],
            [28.351789359, -81.592215438],
            [28.351520209, -81.592224219],
            [28.351311612, -81.592204348],
            [28.351205748, -81.592134241],
            [28.351223378, -81.591795358],
            [28.351061925, -81.591690799],
            [28.351030083, -81.591519869],
            [28.351234329, -81.590760166],
            [28.351352550, -81.590628425],
            [28.351438560, -81.590536113],
            [28.351573798, -81.590168423],
            [28.351614743, -81.590148723],
            [28.351680867, -81.590023723],
            [28.351754228, -81.590016099],
            [28.351821944, -81.589813188],
            [28.352021966, -81.589842408],
            [28.352250030, -81.589872640],
            [28.352521784, -81.589890542],
            [28.352760320, -81.589880158],
            [28.352894322, -81.589932177],
            [28.352527024, -81.591480113]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Evil Queen',
        coordinates: [
            [28.353772663, -81.589092348],
            [28.353576298, -81.589221826],
            [28.353277920, -81.589345441],
            [28.352903229, -81.589517887],
            [28.352632085, -81.589598691],
            [28.352250979, -81.589590544],
            [28.351934587, -81.589487482],
            [28.351694348, -81.589280637],
            [28.351528838, -81.589044887],
            [28.351386247, -81.588870308],
            [28.351215187, -81.588778267],
            [28.351154767, -81.588577082],
            [28.351178869, -81.588249001],
            [28.351256617, -81.587966859],
            [28.351356834, -81.587507129],
            [28.351396183, -81.587306897],
            [28.351358445, -81.586846184],
            [28.351183781, -81.586345116],
            [28.351092244, -81.586086385],
            [28.351052317, -81.585610417],
            [28.351122901, -81.585322101],
            [28.351237639, -81.585030245],
            [28.351309718, -81.584823850],
            [28.351218278, -81.584435263],
            [28.351124743, -81.584163969],
            [28.351114297, -81.584047508],
            [28.351418260, -81.584090056],
            [28.351614065, -81.584196292],
            [28.351877061, -81.584429928],
            [28.352058216, -81.584619510],
            [28.352344433, -81.584890728],
            [28.352647359, -81.585156162],
            [28.352844509, -81.585333678],
            [28.352973896, -81.585689097],
            [28.352984316, -81.586168340],
            [28.352984393, -81.586747288],
            [28.353011986, -81.587278520],
            [28.353071218, -81.587795679],
            [28.353205506, -81.588145831],
            [28.353367679, -81.588402015],
            [28.353523256, -81.588673052],
            [28.353679062, -81.588908431],
            [28.353772663, -81.589092348]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Pete',
        coordinates: [
            [28.353619324, -81.574112029],
            [28.353368120, -81.573868809],
            [28.353039466, -81.573449000],
            [28.353089075, -81.573371466],
            [28.353163547, -81.573318206],
            [28.353312500, -81.573196447],
            [28.353419847, -81.573010209],
            [28.353483599, -81.572901210],
            [28.353562895, -81.572746687],
            [28.353640840, -81.572557126],
            [28.353726830, -81.572377079],
            [28.353802035, -81.572225586],
            [28.353884179, -81.572051509],
            [28.353946030, -81.571897182],
            [28.354021577, -81.571800620],
            [28.354075837, -81.571785361],
            [28.354204995, -81.571888654],
            [28.355273506, -81.573091449],
            [28.355285830, -81.573247948],
            [28.355148274, -81.573383101],
            [28.355018169, -81.573500075],
            [28.354842853, -81.573622767],
            [28.354647532, -81.573807679],
            [28.354462605, -81.573990340],
            [28.354348312, -81.574099802],
            [28.354217765, -81.574110067],
            [28.354026597, -81.574151564],
            [28.353797880, -81.574239688],
            [28.353619324, -81.574112029]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        coordinates: [
            [28.354335166, -81.571259972],
            [28.354504358, -81.571173732],
            [28.354635934, -81.571156200],
            [28.354834305, -81.571204412],
            [28.354917462, -81.571352397],
            [28.354943133, -81.571505232],
            [28.354955855, -81.571701171],
            [28.354945213, -81.571851413],
            [28.354955961, -81.572072235],
            [28.354976762, -81.572208053],
            [28.355042494, -81.572429962],
            [28.355133710, -81.572631413],
            [28.355187890, -81.572795220],
            [28.355270402, -81.572928667],
            [28.355287626, -81.573045186],
            [28.355285632, -81.573079882],
            [28.354215989, -81.571878606],
            [28.354138929, -81.571668475],
            [28.354168016, -81.571488219],
            [28.354233611, -81.571365452],
            [28.354335166, -81.571259972]
        ]
    }

];

var rows = [
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 1,
        coordinates: [
            [28.349203718, -81.588664989],
            [28.349191496, -81.588521070],
            [28.350847400, -81.588508136],
            [28.350851207, -81.588640207],
            [28.349203718, -81.588664989]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 2,
        coordinates: [
            [28.349177080, -81.588504178],
            [28.349164820, -81.588359865],
            [28.350862417, -81.588342757],
            [28.350859934, -81.588480493],
            [28.349177080, -81.588504178]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 3,
        coordinates: [
            [28.349147213, -81.588326184],
            [28.349134968, -81.588198836],
            [28.350885918, -81.588186363],
            [28.350869459, -81.588316748],
            [28.349147213, -81.588326184]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 4,
        coordinates: [
            [28.349135574, -81.588170693],
            [28.349123024, -81.588051807],
            [28.350928805, -81.588028096],
            [28.350900952, -81.588151285],
            [28.349135574, -81.588170693]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 5,
        coordinates: [
            [28.349123818, -81.588004887],
            [28.349119072, -81.587887181],
            [28.350977759, -81.587871959],
            [28.350943062, -81.587991547],
            [28.349123818, -81.588004887]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 6,
        coordinates: [
            [28.349124941, -81.587847494],
            [28.349114735, -81.587722638],
            [28.351017896, -81.587703313],
            [28.350987124, -81.587832247],
            [28.349124941, -81.587847494]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 7,
        coordinates: [
            [28.349116092, -81.587687105],
            [28.349106350, -81.587570962],
            [28.351058936, -81.587548489],
            [28.351031037, -81.587675815],
            [28.349116092, -81.587687105]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Yeti',
        rowNumber: 8,
        coordinates: [
            [28.349108513, -81.587523501],
            [28.349105727, -81.587394699],
            [28.351113072, -81.587382542],
            [28.351078155, -81.587513181],
            [28.349108513, -81.587523501]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Donald',
        rowNumber: 1,
        coordinates: [
            [28.350839325, -81.588785168],
            [28.350924116, -81.588870907],
            [28.349984937, -81.590343115],
            [28.349901304, -81.590274957],
            [28.350839325, -81.588785168]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Donald',
        rowNumber: 2,
        coordinates: [
            [28.350914455, -81.588947664],
            [28.350983352, -81.589046702],
            [28.350062131, -81.590505127],
            [28.349975343, -81.590440891],
            [28.350914455, -81.588947664]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Donald',
        rowNumber: 3,
        coordinates: [
            [28.351005395, -81.589090151],
            [28.351077075, -81.589188055],
            [28.350199559, -81.590574976],
            [28.350110776, -81.590507729],
            [28.351005395, -81.589090151]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Pluto',
        rowNumber: 1,
        coordinates: [
            [28.351391349, -81.590712965],
            [28.351508564, -81.590746025],
            [28.351291843, -81.591521359],
            [28.351179003, -81.591491558],
            [28.351391349, -81.590712965]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Pluto',
        rowNumber: 2,
        coordinates: [
            [28.351540681, -81.590759846],
            [28.351666640, -81.590811804],
            [28.351463154, -81.591567022],
            [28.351334460, -81.591534848],
            [28.351540681, -81.590759846]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Evil Queen',
        rowNumber: 1,
        coordinates: [
            [28.351473857, -81.584153287],
            [28.351605184, -81.584234067],
            [28.351217433, -81.584372385],
            [28.351183188, -81.584275316],
            [28.351473857, -81.584153287]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Evil Queen',
        rowNumber: 2,
        coordinates: [
            [28.351271948, -81.584535623],
            [28.351237654, -81.584420604],
            [28.351653467, -81.584257355],
            [28.351748824, -81.584357335],
            [28.351271948, -81.584535623]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Evil Queen',
        rowNumber: 3,
        coordinates: [
            [28.351320184, -81.584678537],
            [28.351285447, -81.584570120],
            [28.351776502, -81.584373317],
            [28.351878002, -81.584479028],
            [28.351320184, -81.584678537]
        ]
    },
    {
        parkingAreaName: 'parkingArea1',
        characterAreaName: 'Evil Queen',
        rowNumber: 4,
        coordinates: [
            [28.351354453, -81.584836969],
            [28.351330996, -81.584726372],
            [28.351905294, -81.584507455],
            [28.351996973, -81.584612235],
            [28.351354453, -81.584836969]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Pete',
        rowNumber: 1,
        coordinates: [
            [28.353804140, -81.574123651],
            [28.353727483, -81.574179964],
            [28.353088644, -81.573467590],
            [28.353155713, -81.573374569],
            [28.353563431, -81.573824966],
            [28.353751341, -81.574042649],
            [28.353804140, -81.574123651]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Pete',
        rowNumber: 2,
        coordinates: [
            [28.353560732, -81.573760970],
            [28.353210272, -81.573359492],
            [28.353280615, -81.573265648],
            [28.353960378, -81.574040545],
            [28.353895864, -81.574133849],
            [28.353560732, -81.573760970]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Pete',
        rowNumber: 3,
        coordinates: [
            [28.354182410, -81.574065913],
            [28.354085379, -81.574113827],
            [28.353313413, -81.573245645],
            [28.353381004, -81.573131722],
            [28.353979465, -81.573801968],
            [28.354111043, -81.573946676],
            [28.354182410, -81.574065913]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        rowNumber: 1,
        coordinates: [
            [28.354798971, -81.571515754],
            [28.354693453, -81.571393119],
            [28.354792706, -81.571342492],
            [28.354912068, -81.571471204],
            [28.354909680, -81.571631953],
            [28.354798971, -81.571515754]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        rowNumber: 2,
        coordinates: [
            [28.354589224, -81.571519202],
            [28.354682040, -81.571435789],
            [28.354913272, -81.571688636],
            [28.354909689, -81.571862895],
            [28.354589224, -81.571519202]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        rowNumber: 3,
        coordinates: [
            [28.354479697, -81.571651808],
            [28.354571809, -81.571555639],
            [28.354920534, -81.571933075],
            [28.354935917, -81.572141014],
            [28.354479697, -81.571651808]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        rowNumber: 4,
        coordinates: [
            [28.354380589, -81.571765656],
            [28.354463067, -81.571685046],
            [28.354965376, -81.572238715],
            [28.355016043, -81.572485278],
            [28.354380589, -81.571765656]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        rowNumber: 5,
        coordinates: [
            [28.355139389, -81.572878546],
            [28.354847475, -81.572564168],
            [28.354275859, -81.571894897],
            [28.354377410, -81.571817213],
            [28.355090061, -81.572599680],
            [28.355240786, -81.572963347],
            [28.355139389, -81.572878546]
        ]
    },
    {
        parkingAreaName: 'parkingArea2',
        characterAreaName: 'Mickey',
        rowNumber: 6,
        coordinates: [
            [28.354666366, -81.571339014],
            [28.354390239, -81.571672062],
            [28.354334350, -81.571520632],
            [28.354482902, -81.571342897],
            [28.354596295, -81.571306169],
            [28.354666366, -81.571339014]
        ]
    }

];

module.exports = {
    parkingAreas: parkingAreas,
    characterAreas: characterAreas,
    rows: rows
};