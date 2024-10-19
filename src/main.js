let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex flex-wrap basis-full`;
   task.innerHTML = `
      <div class="flex mb-5">
         <span class="text-gray-700 pl-5 font-bold w-72">${title}</span>
         <div class="flex space-x-2">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}" class="bg-green-500 text-white px-3 py-1 rounded-md mr-5">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}" class="bg-red-500 text-white px-3 py-1 rounded-md">
         </div>
      </div>
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
