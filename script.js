$( () => {
  const form = document.forms.form;
  const plaintext = form.plaintext;
  const ciphertext = form.ciphertext;
  const key = form.key;
  const change = form.change;
  const change2 = form.change2;
  console.log(key);

  change.addEventListener("click", ()=>{//暗号化
    ciphertext.value = cipher(plaintext.value, key.value);
  });
  change2.addEventListener("click", ()=>{//復号化
    plaintext.value = decryption(ciphertext.value, key.value);
  });

  function cipher(string, key){
    let text = "";
    for(let i=0;i<string.length;i++){
      let num = string.charCodeAt(i);
      num += Number(key);
      text += String.fromCharCode(num);
    }
    return text;
  }
  function decryption(string, key){
    let text = "";
    for(let i=0;i<string.length;i++){
      let num = string.charCodeAt(i);
      num -= Number(key);
      text += String.fromCharCode(num);
    }
    return text;
  }
});
