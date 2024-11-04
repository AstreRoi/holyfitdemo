// 이상적인 신체 비율 (가슴:허리:엉덩이 비율)
const idealRatios = { chestWaist: 1.4, waistHips: 0.7 };

// 샘플 데이터를 사용하여 장비에서 신체 라인 데이터를 가져오는 함수
function fetchBodyLineData() {
    // 실제 장비 API 호출 대신 샘플 데이터를 사용
    const sampleData = {
        chest: 90,
        waist: 70,
        hips: 95
    };

    // 데이터를 입력 필드에 채웁니다.
    document.getElementById("chest").value = sampleData.chest;
    document.getElementById("waist").value = sampleData.waist;
    document.getElementById("hips").value = sampleData.hips;

    document.getElementById("analysisResult").innerText = "장비에서 신체 라인 데이터가 성공적으로 불러와졌습니다.";
}

// 신체 라인 분석 함수
function analyzeBodyLine() {
    const chest = parseFloat(document.getElementById("chest").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const hips = parseFloat(document.getElementById("hips").value);

    if (chest && waist && hips) {
        // 실제 신체 비율 계산
        const chestWaistRatio = chest / waist;
        const waistHipsRatio = waist / hips;

        let analysis = '';
        let recommendation = '';

        // 가슴-허리 비율 비교
        if (chestWaistRatio < idealRatios.chestWaist) {
            analysis += '가슴 근육이 부족할 수 있습니다. ';
            recommendation += '가슴 근육 발달을 위한 벤치프레스, 푸시업을 추천합니다. ';
        } else {
            analysis += '가슴 근육이 이상적입니다. ';
        }

        // 허리-엉덩이 비율 비교
        if (waistHipsRatio > idealRatios.waistHips) {
            analysis += '허리 주변 지방이 많을 수 있습니다. ';
            recommendation += '복부 지방 감소를 위한 크런치, 플랭크를 추천합니다. ';
        } else {
            analysis += '허리-엉덩이 비율이 이상적입니다. ';
        }

        // 결과 표시
        document.getElementById("analysisResult").innerText = analysis;
        document.getElementById("exerciseRecommendation").innerText = recommendation;
    } else {
        document.getElementById("analysisResult").innerText = '모든 신체 치수를 입력하세요.';
        document.getElementById("exerciseRecommendation").innerText = '';
    }
}
