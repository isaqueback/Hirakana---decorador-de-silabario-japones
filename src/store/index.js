import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colSpan: {
            seion: [3, 2, 3, 2, 3],
            youon: [, , , , , 5, 3, 5],
            sokuon: [, , , , , , , , 3, 2, 3, 2, 3],
        },
        syllabaries: {
            romaji: [
                [
                    "a", "i", "u", "e", "o", "ya", "yu", "yo", "", "", "", "", ""
                ],
                [
                    "ka", "ki", "ku", "ke", "ko", "kya", "kyu", "kyo", "kka", "kki", "kku", "kke", "kko",
                ],
                [
                    'sa', 'shi', 'su', 'se', 'so', 'sha', 'shu', 'sho', 'ssa', 'sshi', 'ssu', 'sse', 'sso'
                ],
                [
                    'ta', 'chi', 'tsu', 'te', 'to', 'cha', 'chu', 'cho', 'tta', 'cchi', 'ttsu', 'tte', 'tto'
                ],
                [
                    'na', 'ni', 'nu', 'ne', 'no', 'nya', 'nya', 'nyo', '', '', '', '', ''
                ],
                [
                    'ha', 'hi', 'fu', 'he', 'ho', 'nya', 'hyu', 'hyo', '', '', '', '', ''
                ],
                [
                    'ma', 'mi', 'mu', 'me', 'mo', 'mya', 'myu', 'myo', '', '', '', '', ''
                ],
                [
                    'ya', '', 'yu', '', 'yo', '', '', '', '', '', '', '', ''
                ],
                [
                    'ra', 'ri', 'ru', 're', 'ro', 'rya', 'ryu', 'ryo', '', '', '', '', ''
                ],
                [
                    'wa', 'wi', 'wu', 'we', 'wo', '', '', '', '', '', '', '', ''
                ],
                [
                    '', '', '', '', 'n', '', '', '', '', '', '', '', ''
                ],
                [
                    'ga', 'gi', 'gu', 'ge', 'go', 'gya', 'gyu', 'gyo', '', '', '', '', ''
                ],
                [
                    'za', 'ji', 'zu', 'ze', 'zo', 'ja', 'ju', 'jo', '', '', '', '', ''
                ],
                [
                    'da', 'dji', 'dzu', 'de', 'do', 'dya', 'dyu', 'dyo', '', '', '', '', ''
                ],
                [
                    'ba', 'bi', 'bu', 'be', 'bo', 'bya', 'byu', 'byo', 'bba', 'bbi', 'bbu', 'bbe', 'bbo'
                ],
                [
                    'pa', 'pi', 'pu', 'pe', 'po', 'pya', 'pyu', 'pyo', 'ppa', 'ppi', 'ppu', 'ppe', 'ppo'
                ]
            ],
            kana: [
                [
                    "あ", "い", "う", "え", "お", "ゃ", "ゅ", "ょ", '', '', '', '', ''
                ],
                [
                    "か", "き", "く", "	け", "こ", "きゃ", "きゅ", "きょ", "っか", "っき", "っく", "っけ", "っこ"
                ],
                [
                    "さ", "し", "す", "せ", "そ", "しゃ", "しゅ", "しょ", "っさ", "っし", "っす", "っせ", "っそ"
                ],
                [
                    "た", "ち", "つ", "て", "と", "ちゃ", "ちゅ", "ちょ", "った", "っち", "っつ", "って", "っと"
                ],
                [
                    "な", "に", "ぬ", "ね", "の", "にゃ", "にゅ", "にょ", '', '', '', '', ''
                ],
                [
                    "は", "ひ", "ふ", "へ", "ほ", "ひゃ", "ひゅ", "ひょ", '', '', '', '', ''
                ],
                [
                    "ま", "み", "む", "め", "も", "みゃ", "みゅ", "みょ", '', '', '', '', ''
                ],
                [
                    "や", '', "ゆ", '', "よ", '', '', '', '', '', '', '', ''
                ],
                [
                    "ら", "り", "る", "れ", "ろ", "りゃ", "りゅ", "りょ", '', '', '', '', ''
                ],
                [
                    "わ", '', '', '', "を", '', '', '', '', '', '', '', ''
                ],
                [
                    '', '', '', '', "ん", '', '', '', '', '', '', '', ''
                ],
                [
                    "が", "ぎ", "ぐ", "げ", "ご", "ぎゃ", "ぎゅ", "ぎょ", '', '', '', '', ''
                ],
                [
                    "ざ", "じ", "ず", "ぜ", "ぞ", "じゃ", "じゅ", "じょ", '', '', '', '', ''
                ],
                [
                    "だ", "ぢ", "づ", "で ", "ど", "ぢゃ", "ぢゅ", "ぢょ", '', '', '', '', ''
                ],
                [
                    "ば", "び", "ぶ", "べ", "ぼ", "びゃ", "びゅ", "びょ", "っば", "っび", "っぶ", "っべ", "っぼ"
                ],
                [
                    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "ぴゃ", "ぴゅ", "ぴょ", "っぱ", "っぴ", "っぷ", "っぺ", "っぽ"
                ]
            ]
        }
    },
    mutations: {
        getAd() {
            const script2 = document.createElement("script");
            script2.innerText = "(adsbygoogle = window.adsbygoogle || []).push({});";

            const ins = document.createElement("ins");
            ins.classList.add("adsbygoogle");
            ins.style.display = "block";
            ins.setAttribute("data-ad-client", "ca-pub-7538231295956832");
            ins.setAttribute("data-ad-slot", "6675852008");
            ins.setAttribute("data-ad-format", "auto");
            ins.setAttribute("data-full-width-responsive", "true");

            const ad = document.querySelector(".ad");
            ad.appendChild(ins);
            ad.appendChild(script2);
        },
    }
})
