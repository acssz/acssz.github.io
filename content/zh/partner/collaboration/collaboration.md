---
---

<div class="image-grid">
  <img src="1.png" alt="groupmutual"> 
  <img src="2.jpg" alt="meedo"> 
  <img src="JCInsurance.png" alt="JCInsurance"> 
</div>

<style>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
    padding: 10px;
    align-items: center; 
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    padding: 20px;
    border-radius: 20px;
  }
</style>