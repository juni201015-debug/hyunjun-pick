export default async function handler(req, res) {
  try {
    // 다음 스포츠 공식 KBO API 서버 직접 호출 (CORS 차단 없음)
    const response = await fetch('https://sports.daum.net/prx/hermes/api/team/rank.json?leagueCode=kbo');
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: '데이터 수집 실패' });
  }
}
