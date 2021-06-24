//parent element to store cards
// const taskContainer = document.querySelector(".task__container");


// global store
/* const globalStore = [];   // array cuz we will store cards 

const newCard = (id, imageUrl, taskType, taskTitle, taskDescription) => `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
    </div>
    <img src=${imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">${taskDescription}</p>
      <span class="badge bg-primary">${taskType}</span>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
  </div>
</div>`; */
//getting task conatainer to add cards
const taskContainer = document.querySelector(".task__container");

// new card template
const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4 mt-3" >
<div class="card shadow-sm task__card">
  <div class="card-header d-flex justify-content-end task__card__header">
    <button type="button" class="btn btn-outline-info mr-2" onclick ="editCard()" >
      <i class="fas fa-pencil-alt" onlick ="editCard()"></i>
    </button>
    <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this, arguments)" data-bs-target="#animateModal" data-bs-toggle="modal" >
                  <i class="fas fa-trash-alt"id=${taskData.id}
                  data-bs-target="#animateModal" data-bs-toggle="modal" onclick="deleteCard.apply(this, arguments)" ></i>
                </button>
  </div>
  <div class="card-body">
            <img height="200rem" src="${taskData.imageUrl}" alt="Card image cap" class="card-img-top mb-3 rounded-lg" id="myImg">
  
    <h4 class="task__card__title" id="title">${taskData.taskTitle}</h4>
    <p class="description trim-3-lines text-muted" id="desc" >
     ${taskData.taskDesc}
    </p>
    <div class="tags text-white d-flex flex-wrap">
      <span class="badge bg-primary m-1" id="type">${taskData.taskType}</span>
    </div>
  </div>
  <div class="card-footer">
    
    <button type="button" onclick="saveEdit()" class="btn btn-primary float-right"">
      Save Changes
    </button>
    <button type="button"  class="btn btn-primary float-right"data-bs-target="#openModal" onclick="openModal()" data-bs-toggle="modal">
    <i class="fas fa-external-link-alt" onclick="openModal()"
    data-bs-target="#openModal" data-bs-toggle="modal"></i>
    </button>
  </div>
</div>
</div>
`;

/* const saveChanges = () => {
 const taskData = {
     id: `${Date.now()}`, //unique numbers for card id
     imageUrl: document.getElementById("imageurl").value,
     taskTitle: document.getElementById("tasktitle").value,
     taskType: document.getElementById("tasktype").value,
     taskDescription: document.getElementById("taskdescription").value,
 }; */
 const saveChanges = () => {
  const taskData = {
    id: Date.now(),
    imageUrl: document.getElementById("imageUrl").value,
    taskTitle: document.getElementById("taskTitle").value,
    taskType: document.getElementById("taskType").value,
    taskDesc: document.getElementById("taskDesc").value,
  };

 // HTML code

//const createNewCard = newCard(taskData);
//taskContainer.insertAdjacentHTML("beforeend", createNewCard);
taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
globalStore.push(taskData);
console.log(globalStore);
};




// issues (till day 15)

// model wasnt closing uppon adding new card.    <solved>
// cards were deleted after refresh  ->local storage(browser storage) -> (5mb limit/website)

//features to implement today ( day 16)
// delete model feature
// open task
// edit task