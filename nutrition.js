let nutritionGoals = { protein: 0, carbs: 0, fats: 0 };

// 영양 목표 설정 (관리자)
function setGoals() {
    nutritionGoals.protein = parseInt(document.getElementById("proteinGoal").value);
    nutritionGoals.carbs = parseInt(document.getElementById("carbsGoal").value);
    nutritionGoals.fats = parseInt(document.getElementById("fatsGoal").value);

    document.getElementById("goalMessage").innerText = 
        `오늘의 목표 설정 완료: 단백질 ${nutritionGoals.protein}g, 탄수화물 ${nutritionGoals.carbs}g, 지방 ${nutritionGoals.fats}g`;
}

// 사용자의 식단 기록 추가
function addRecord() {
    const protein = parseInt(document.getElementById("protein").value);
    const carbs = parseInt(document.getElementById("carbs").value);
    const fats = parseInt(document.getElementById("fats").value);

    document.getElementById("recordMessage").innerText = 
        `오늘 섭취한 영양소: 단백질 ${protein}g, 탄수화물 ${carbs}g, 지방 ${fats}g`;

    provideFeedback(protein, carbs, fats);
}

// 영양 목표와 식단 기록 비교 후 피드백 제공
function provideFeedback(protein, carbs, fats) {
    const feedback = document.getElementById("feedbackMessage");
    const proteinDiff = protein - nutritionGoals.protein;
    const carbsDiff = carbs - nutritionGoals.carbs;
    const fatsDiff = fats - nutritionGoals.fats;

    if (proteinDiff < 0 || carbsDiff < 0 || fatsDiff < 0) {
        feedback.innerText = 
            `영양소 섭취량이 부족합니다. 충분한 영양 섭취가 중요합니다.`;
    } else if (proteinDiff > 0 || carbsDiff > 0 || fatsDiff > 0) {
        feedback.innerText = 
            `계획보다 많이 섭취하셨습니다. 과도한 영양 섭취는 건강에 해로울 수 있으니 주의하세요.`;
    } else {
        feedback.innerText = `훌륭합니다! 목표에 맞춰 영양소를 섭취하고 있습니다.`;
    }
}
