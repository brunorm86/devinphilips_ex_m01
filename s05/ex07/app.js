import Time from './Time.js';

import Partida from './Partida.js';

let avai = new Time("Avai", "AVA", 0, 0, 0, 0, 0)
let gremio = new Time("Gremio", "GRE", 0, 0, 0, 0, 0)

let partida1 = new Partida("AVA", 2, "GRE", 0)
let partida2 = new Partida("GRE", 2, "AVA", 3)
let partida3 = new Partida("GRE", 3, "AVA", 3)
let partida4 = new Partida("GRE", 3, "SPO", 3)
avai.computarPartida(partida1)
avai.computarPartida(partida2)
avai.computarPartida(partida3)
avai.computarPartida(partida4)

avai.exibirSituacao