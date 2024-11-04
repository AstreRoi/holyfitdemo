// 인바디 API에서 데이터 가져오기
function fetchInbodyData() {
    // 여기에 실제 인바디 API 호출 코드를 추가합니다.
    // 예시 데이터로 표시
    const sampleData = {
        weight: 70.5,
        muscleMass: 30.2,
        bodyFat: 15.3,
        bmi: 23.5,
        bodyFatPercentage: 21.7
    };

    // 데이터를 입력 필드에 채웁니다.
    document.getElementById("weight").value = sampleData.weight;
    document.getElementById("muscleMass").value = sampleData.muscleMass;
    document.getElementById("bodyFat").value = sampleData.bodyFat;
    document.getElementById("bmi").value = sampleData.bmi;
    document.getElementById("bodyFatPercentage").value = sampleData.bodyFatPercentage;

    document.getElementById("statusMessage").innerText = "인바디 데이터가 성공적으로 불러와졌습니다.";
}

// 사용자가 입력한 데이터를 저장
function saveInbodyData() {
    const weight = document.getElementById("weight").value;
    const muscleMass = document.getElementById("muscleMass").value;
    const bodyFat = document.getElementById("bodyFat").value;
    const bmi = document.getElementById("bmi").value;
    const bodyFatPercentage = document.getElementById("bodyFatPercentage").value;

    // 수정된 데이터를 객체로 저장
    const updatedData = {
        weight: parseFloat(weight),
        muscleMass: parseFloat(muscleMass),
        bodyFat: parseFloat(bodyFat),
        bmi: parseFloat(bmi),
        bodyFatPercentage: parseFloat(bodyFatPercentage)
    };

    // 여기에서 API 호출을 통해 데이터를 업데이트할 수 있습니다.
    console.log("저장된 데이터:", updatedData);

    // 사용자에게 저장 상태를 표시
    document.getElementById("statusMessage").innerText = "인바디 데이터가 성공적으로 저장되었습니다.";
}
