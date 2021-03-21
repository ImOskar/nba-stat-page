import atl from "../assets/team-logos/atl.svg";
import bkn from "../assets/team-logos/bkn.svg";
import bos from "../assets/team-logos/bos.svg";
import cha from "../assets/team-logos/cha.svg";
import chi from "../assets/team-logos/chi.svg";
import cle from "../assets/team-logos/cle.svg";
import dal from "../assets/team-logos/dal.svg";
import den from "../assets/team-logos/den.svg";
import det from "../assets/team-logos/det.svg";
import gsw from "../assets/team-logos/gsw.svg";
import hou from "../assets/team-logos/hou.svg";
import ind from "../assets/team-logos/ind.svg";
import lac from "../assets/team-logos/lac.svg";
import lal from "../assets/team-logos/lal.svg";
import mem from "../assets/team-logos/mem.svg";
import mia from "../assets/team-logos/mia.svg";
import mil from "../assets/team-logos/mil.svg";
import min from "../assets/team-logos/min.svg";
import nop from "../assets/team-logos/nop.svg";
import nyk from "../assets/team-logos/nyk.svg";
import okc from "../assets/team-logos/okc.svg";
import orl from "../assets/team-logos/orl.svg";
import phi from "../assets/team-logos/phi.svg";
import phx from "../assets/team-logos/phx.svg";
import por from "../assets/team-logos/por.svg";
import sac from "../assets/team-logos/sac.svg";
import sas from "../assets/team-logos/sas.svg";
import tor from "../assets/team-logos/tor.svg";
import uta from "../assets/team-logos/uta.svg";
import was from "../assets/team-logos/was.svg";

const logos = [
  { abbr: "ATL", logo: atl },
  { abbr: "BKN, BRK", logo: bkn },
  { abbr: "BOS", logo: bos },
  { abbr: "CHA, CHO", logo: cha },
  { abbr: "CHI", logo: chi },
  { abbr: "CLE", logo: cle },
  { abbr: "DAL", logo: dal },
  { abbr: "DEN", logo: den },
  { abbr: "DET", logo: det },
  { abbr: "GSW", logo: gsw },
  { abbr: "HOU", logo: hou },
  { abbr: "IND", logo: ind },
  { abbr: "LAC", logo: lac },
  { abbr: "LAL", logo: lal },
  { abbr: "MEM", logo: mem },
  { abbr: "MIA", logo: mia },
  { abbr: "MIL", logo: mil },
  { abbr: "MIN", logo: min },
  { abbr: "NOP", logo: nop },
  { abbr: "NYK", logo: nyk },
  { abbr: "OKC", logo: okc },
  { abbr: "ORL", logo: orl },
  { abbr: "PHI", logo: phi },
  { abbr: "PHX, PHO", logo: phx },
  { abbr: "POR", logo: por },
  { abbr: "SAC", logo: sac },
  { abbr: "SAS", logo: sas },
  { abbr: "TOR", logo: tor },
  { abbr: "UTA", logo: uta },
  { abbr: "WAS", logo: was },
];

function getLogo(teamName) {
  let logo = logos.filter((obj) => obj.abbr.includes(teamName));
  return logo[0].logo;
}

export default getLogo;
