let posts = [
    { title: "1984", content: "George Orwell tarafından yazılmış distopik bir roman." },
    { title: "Sefiller", content: "Victor Hugo'nun klasikleşmiş eseri." },
    { title: "Bülbülü Öldürmek", content: "Harper Lee tarafından yazılmış bir Amerikan romanı." },
  ];
  
  function listPosts() {
    if (posts.length === 0) {
      console.log("\n--- Hiç post bulunamadı! ---");
    } else {
      console.log("\n--- Mevcut Postlar ---");
      posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}: ${post.content}`);
      });
      console.log("-----------------------");
    }
  }
  
  function addPost(title, content) {
    if (title && content) {
      posts.push({ title, content });
      console.log(`\nYeni bir post eklendi: "${title}"`);
    } else {
      console.log("\nBaşlık ve içerik gereklidir!");
    }
  }
  
  console.log("İlk başta postları sıralayalım:");
  listPosts();
  
  console.log("\nAudi postunu ekleyelim:");
  addPost("Audi", "Audi model araba.");
  
  console.log("\nYeni post eklendikten sonra postları sıralayalım:");
  listPosts();
  