
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password).then(user => {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user-email").textContent = email;
  }).catch(alert);
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password).then(login).catch(alert);
}

function logout() {
  auth.signOut().then(() => location.reload());
}

function submitReflection() {
  const text = document.getElementById("daily-input").value;
  const email = auth.currentUser.email;
  db.collection("reflections").add({ email, text, date: new Date() }).then(() => {
    alert("Reflection saved!");
    document.getElementById("daily-input").value = "";
  }).catch(alert);
}

function showWeeklyQuiz() {
  document.getElementById("quiz-section").style.display = "block";
}

function submitQuiz() {
  const questions = document.querySelectorAll("#quiz-section textarea");
  const answers = Array.from(questions).map(q => q.value);
  const email = auth.currentUser.email;
  db.collection("weekly_quiz").add({ email, answers, date: new Date() }).then(() => {
    alert("Weekly quiz submitted!");
    document.getElementById("quiz-section").style.display = "none";
    questions.forEach(q => q.value = "");
  }).catch(alert);
}

function downloadData() {
  const email = auth.currentUser.email;
  db.collection("reflections").where("email", "==", email).get().then(snapshot => {
    const data = snapshot.docs.map(doc => doc.data()).map(d => `${d.date.toDate()}:
${d.text}`).join("\n\n");
    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "my_reflections.txt";
    link.click();
  });
}
