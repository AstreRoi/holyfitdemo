// 사용자 방문 횟수를 저장할 객체
const userVisits = {};

// 체크인 함수: 사용자가 키오스크를 통해 체크인하면 방문 횟수가 증가합니다.
function checkIn() {
    const userId = document.getElementById('userId').value;
    if (userId === "") {
        alert("사용자 ID를 입력하세요.");
        return;
    }

    if (userVisits[userId]) {
        userVisits[userId]++;
    } else {
        userVisits[userId] = 1;
    }

    document.getElementById('visitMessage').innerText = `${userId}님의 현재 방문 횟수는 ${userVisits[userId]}회입니다.`;
    alert(`${userId}님, 체크인 되었습니다. 방문 횟수: ${userVisits[userId]}`);
}

// 관리자 방문 횟수 업데이트 함수
function updateVisitCount() {
    const adminUserId = document.getElementById('adminUserId').value;
    const visitCount = parseInt(document.getElementById('visitCount').value);

    if (adminUserId === "" || isNaN(visitCount)) {
        alert("사용자 ID와 방문 횟수를 정확히 입력하세요.");
        return;
    }

    userVisits[adminUserId] = visitCount;

    document.getElementById('visitMessage').innerText = `${adminUserId}님의 현재 방문 횟수는 ${userVisits[adminUserId]}회로 업데이트되었습니다.`;
    alert(`${adminUserId}님의 방문 횟수가 ${visitCount}회로 업데이트되었습니다.`);
}
