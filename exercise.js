let plan = null;

// 관리자용 운동 계획 추가 함수
function addPlan() {
    const exerciseType = document.getElementById("planExerciseType").value;
    const reps = parseInt(document.getElementById("planReps").value);
    const sets = parseInt(document.getElementById("planSets").value);

    if (reps && sets) {
        plan = { exerciseType, reps, sets };  // 운동 계획 저장
        document.getElementById("planMessage").innerText = 
            `운동 계획 추가됨: ${exerciseType} - ${reps}회 x ${sets}세트`;
    } else {
        document.getElementById("planMessage").innerText = "모든 필드를 입력하세요.";
    }
}

// 사용자 운동 기록 추가 및 피드백 함수
function addRecord() {
    const exerciseType = document.getElementById("exerciseType").value;
    const reps = parseInt(document.getElementById("reps").value);
    const sets = parseInt(document.getElementById("sets").value);

    if (!plan) {
        document.getElementById("recordMessage").innerText = 
            "운동 계획이 아직 추가되지 않았습니다.";
        return;
    }

    if (exerciseType === plan.exerciseType && reps && sets) {
        document.getElementById("recordMessage").innerText = 
            `운동 기록 추가됨: ${exerciseType} - ${reps}회 x ${sets}세트`;
        
        provideFeedback(reps, sets);
    } else {
        document.getElementById("recordMessage").innerText = 
            "운동 계획과 일치하는 운동을 입력하세요.";
    }
}

// 피드백 제공 함수
function provideFeedback(reps, sets) {
    const totalReps = reps * sets;
    const planTotalReps = plan.reps * plan.sets;
    const feedback = document.getElementById("feedbackMessage");

    if (totalReps < planTotalReps) {
        feedback.innerText = 
            `목표보다 적게 수행하셨습니다. 근육 발달이 부족할 수 있으며, 꾸준한 반복이 필요합니다.`;
    } else if (totalReps > planTotalReps) {
        feedback.innerText = 
            `계획보다 많이 수행했습니다. 과도한 운동은 부상의 위험을 증가시키니 적절한 휴식을 취하세요.`;
    } else {
        feedback.innerText = `잘하셨습니다! 계획에 맞게 운동을 수행하여 목표에 다가가고 있습니다.`;
    }
}
