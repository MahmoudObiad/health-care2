// عرض رسالة ترحيب عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    alert("مرحبًا بك في موقع الرعاية الصحية! ابدأ حياتك الصحية الآن.");
});

// وظيفة تفاعلية عند الضغط على زر (عرض النصائح الصحية)
function nutrition() {
    const tips = [
        "اشرب 8 أكواب من الماء يوميًا.",
        "مارس الرياضة لمدة 30 دقيقة على الأقل يوميًا.",
        "تناول الخضروات والفواكه بكثرة.",
        "خذ قسطًا كافيًا من النوم يوميًا (7-8 ساعات).",
        "قلل من تناول السكر والوجبات السريعة."
    ];

    let message = "نصائح صحية لك:\n";
    tips.forEach((tip, index) => {
        message += `${index + 1}. ${tip}\n`;
    });

    alert(message);
}

// تعريف النصوص
const yaqahhome = "الياقة هي حالة الجسم التي تسمح بالقيام بالأنشطة اليومية بسهولة و فعالية.";
const yaqahnutrition = [
 "تحسين الصحة العامة",
 "زيادة الطاقة",
 "تحسين النوم",
 "تقليل الوزن",
 "تحسين الذاكرة"
];

// إضافة النصوص إلى الصفحة
document.getElementById("yaqah-definition").innerText = yaqahDefinition;

yaqahBenefits.forEach(benefit => {
 const li = document.createElement("LI");
 li.innerText = benefit;
 document.getElementById("yaqah-benefits").appendChild(li);
});
