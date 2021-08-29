const getDateTime = () => {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length === 1) {
    month = "0" + month;
  }
  if (day.toString().length === 1) {
    day = "0" + day;
  }
  if (hour.toString().length === 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length === 1) {
    minute = "0" + minute;
  }
  if (second.toString().length === 1) {
    second = "0" + second;
  }
  var dateTime = year + month + day + "-" + hour + minute + second;
  return dateTime;
};

const currentTime = getDateTime();

// COPY TO CLIPBOARD
function copyToClipboard(textBlock) {
  //getting text from P tag
  // creating textarea of html
  var input = document.createElement("textarea");
  //adding p tag text to textarea
  input.value = textBlock;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  // removing textarea after copy
  input.remove();
  // alert(input.value);
}

export function generateText(answers) {
  const f1 = answers.answers.find((answer) => answer.id === "f1");
  const val1 = f1.value;
  const rating1 = f1.rating;

  const f2 = answers.answers.find((answer) => answer.id === "f2");
  const val2 = f2.value;
  const rating2 = f2.rating;

  const f3 = answers.answers.find((answer) => answer.id === "f3");
  const val3 = f3.value;
  const rating3 = f3.rating;

  const f4 = answers.answers.find((answer) => answer.id === "f4");
  const val4 = f4.value;
  const rating4 = f4.rating;

  const a1 = answers.answers.find((answer) => answer.id === "a1");
  const val5 = a1.value;
  const rating5 = a1.rating;

  const a2 = answers.answers.find((answer) => answer.id === "a2");
  const val6 = a2.value;
  const rating6 = a2.rating;

  const a3 = answers.answers.find((answer) => answer.id === "a3");
  const val7 = a3.value;
  const rating7 = a3.rating;

  const i1 = answers.answers.find((answer) => answer.id === "i1");
  const val8 = i1.value;
  const rating8 = i1.rating;

  const i2 = answers.answers.find((answer) => answer.id === "i2");
  const val9 = i2.value;
  const rating9 = i2.rating;

  const i3 = answers.answers.find((answer) => answer.id === "i3");
  const val10 = i3.value;
  const rating10 = i3.rating;

  const r1 = answers.answers.find((answer) => answer.id === "r1");
  const val11 = r1.value;
  const rating11 = r1.rating;

  const r2 = answers.answers.find((answer) => answer.id === "r2");
  const val12 = r2.value;
  const rating12 = r2.rating;

  // Calculate percentage result for Findable (total available = 17points)
  const f_total =
    parseInt(rating1) +
    parseInt(rating2) +
    parseInt(rating3) +
    parseInt(rating4);
  const f_result = Math.round((f_total / 17) * 100);
  // Calculate percentage result for Accessible (total available = 10points)
  const a_total = parseInt(rating5) + parseInt(rating6) + parseInt(rating7);
  const a_result = Math.round((a_total / 10) * 100);
  // Calculate percentage result for Interoperable (total available = 8points)
  const i_total = parseInt(rating8) + parseInt(rating9) + parseInt(rating10);
  const i_result = Math.round((i_total / 8) * 100);
  // Calculate percentage result for Reusable (total available = 7points)
  const r_total = parseInt(rating11) + parseInt(rating12);
  const r_result = Math.round((r_total / 7) * 100);

  const total =
    parseInt(rating1) +
    parseInt(rating2) +
    parseInt(rating3) +
    parseInt(rating4) +
    parseInt(rating5) +
    parseInt(rating6) +
    parseInt(rating7) +
    parseInt(rating8) +
    parseInt(rating9) +
    parseInt(rating10) +
    parseInt(rating11) +
    parseInt(rating12);

  const result = Math.round((total / 42) * 100);

  // Generate text block for copying to clipboard
  const textBlock =
    "This text has been generated from a tool that has been adapted from the ARDC FAIR Assessment Tool" +
    "\n\n" +
    "Findable" +
    "\n" +
    "--------" +
    "\n" +
    "Does the dataset have any identifiers assigned?" +
    "\n" +
    val1 +
    "\n\n" +
    "Is the dataset identifier included in all metadata records/files describing the data?</p>" +
    "\n" +
    val2 +
    "\n\n" +
    "How is the data described with metadata?" +
    "\n" +
    val3 +
    "\n\n" +
    "What type of repository or registry is the metadata record in?" +
    "\n" +
    val4 +
    "\n\n" +
    "Accessible" +
    "\n" +
    "----------" +
    "\n" +
    "How accessible is the data?" +
    "\n" +
    val5 +
    "\n\n" +
    "Is the data available online without requiring specialised protocols or tools once access has been approved?" +
    "\n" +
    val6 +
    "\n\n" +
    "Will the metadata record be available even if the data is no longer available?" +
    "\n" +
    val7 +
    "\n\n" +
    "Interoperable" +
    "\n" +
    "-------------" +
    "\n" +
    "What (file) format(s) is the data available in?" +
    "\n" +
    val8 +
    "\n\n" +
    "What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?" +
    "\n" +
    val9 +
    "\n\n" +
    "How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?" +
    "\n" +
    val10 +
    "\n\n" +
    "Reusable" +
    "\n" +
    "--------" +
    "\n" +
    "Which of the following best describes the license/usage rights attached to the data?" +
    "\n" +
    val11 +
    "\n\n" +
    "How much provenance information has been captured to facilitate data reuse?" +
    "\n" +
    val12 +
    "\n";

  // Generate Stars rating
  let stars = "";
  let numStars = 0;
  if (result > 50) {
    stars += "<span style='font-size:150%;color:orange;'>&starf;</span>";
    numStars += 1;
  } else {
    stars += "<span style='font-size:150%;color:orange;'>&star;</span>";
  }
  if (result > 60) {
    stars += "<span style='font-size:150%;color:orange;'>&starf;</span>";
    numStars += 1;
  } else {
    stars += "<span style='font-size:150%;color:orange;'>&star;</span>";
  }
  if (result > 70) {
    stars += "<span style='font-size:150%;color:orange;'>&starf;</span>";
    numStars += 1;
  } else {
    stars += "<span style='font-size:150%;color:orange;'>&star;</span>";
  }
  if (result > 80) {
    stars += "<span style='font-size:150%;color:orange;'>&starf;</span>";
    numStars += 1;
  } else {
    stars += "<span style='font-size:150%;color:orange;'>&star;</span>";
  }
  if (result > 90) {
    stars += "<span style='font-size:150%;color:orange;'>&starf;</span>";
    numStars += 1;
  } else {
    stars += "<span style='font-size:150%;color:orange;'>&star;</span>";
  }

  const htmlBlock =
    "<h5>Your text has been copied to the clipboard and can now be pasted into the Macquarie University Research Data Repository</h5>" +
    // '<h6>You can also download the results for later reuse <a href="#" id="download">here</a></h6>' +
    "<hr />" +
    "<h3>Results Summary</h3>" +
    "Your Overall FAIR assessment is:" +
    "<p style='font-size:34px; margin: 0px 0px 0px 0px; '>" +
    result +
    "%</p>" +
    "<div style='padding: 0px 0px 20px 0px;'>" +
    stars +
    " (" +
    numStars +
    " stars)" +
    "</div>" +
    '<progress style="width: 100%; height: 50px;" max="100" value="' +
    result +
    '"></progress>' +
    "Findable" +
    '<p><progress style="width: 25%; height: 25px;" max="100" value="' +
    f_result +
    '"></progress></p>' +
    "Accessible" +
    '<p><progress style="width: 25%; height: 25px;" max="100" value="' +
    a_result +
    '"></progress></p>' +
    "Interoperable" +
    '<p><progress style="width: 25%; height: 25px;" max="100" value="' +
    i_result +
    '"></progress></p>' +
    "Reusable" +
    '<p><progress style="width: 25%; height: 25px;" max="100" value="' +
    r_result +
    '"></progress></p>' +
    "<hr />" +
    "<h5>Findable</h5>" +
    "Does the dataset have any identifiers assigned?" +
    "<p>" +
    val1 +
    "</p>" +
    "Is the dataset identifier included in all metadata records/files describing the data?" +
    "<p>" +
    val2 +
    "</p>" +
    "How is the data described with metadata?" +
    "<p>" +
    val3 +
    "</p>" +
    "What type of repository or registry is the metadata record in?" +
    "<p>" +
    val4 +
    "</p>" +
    "<h5>Accessible</h5>" +
    "How accessible is the data?" +
    "<p>" +
    val5 +
    "</p>" +
    "Is the data available online without requiring specialised protocols or tools once access has been approved?" +
    "<p>" +
    val6 +
    "</p>" +
    "Will the metadata record be available even if the data is no longer available?" +
    "<p>" +
    val7 +
    "</p>" +
    "<h5>Interoperable</h5>" +
    "What (file) format(s) is the data available in?" +
    "<p>" +
    val8 +
    "</p>" +
    "What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?" +
    "<p>" +
    val9 +
    "</p>" +
    "How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?" +
    "<p>" +
    val10 +
    "</p>" +
    "<h5>Reusable</h5>" +
    "Which of the following best describes the license/usage rights attached to the data?" +
    "<p>" +
    val11 +
    "</p>" +
    "How much provenance information has been captured to facilitate data reuse?" +
    "<p>" +
    val12 +
    "</p>";

  // // Write HTML block to modal inner text
  // document.getElementById("results-modal-content").innerHTML = htmlBlock;

  // // Populate download text button

  // var fileName = "FAIR_Results_" + currentTime + ".txt";
  // var myFile = new Blob([textBlock], { type: "text/plain" });

  // window.URL = window.URL || window.webkitURL;
  // var dlBtn = document.getElementById("download");

  // dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
  // dlBtn.setAttribute("download", fileName);

  // copy text to the clipboard
  copyToClipboard(textBlock);

  // // Get the modal and open it
  // var resultsModal = document.getElementById("resultsModal");
  // // When the user clicks on the button, open the modal
  // resultsModal.style.display = "block";

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target === resultsModal) {
  //     resultsModal.style.display = "none";
  //   }
  // };

  return htmlBlock;
}
