import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  card1 = async (idd: string) => {
    console.log(idd);
    const data = await fetch(`http://localhost:3000/data/${idd}`).then((res) =>
      res.json()
    );
    const { desc, id, pdflink, publishdate, title } = data;

    const author = document.getElementById('author');
    const descr = document.getElementById('descr');
    const pd = document.getElementById('pd');
    const pdf = document.getElementById('pdf');

    if (author) {
      author.innerText = 'Author name:' + title;
    }
    if (descr) {
      descr.innerText = 'Description: ' + desc;
    }
    if (pd) {
      pd.innerText = 'Publish Date: ' + publishdate;
    }
    if (pdf) {
      pdf.setAttribute('src', pdflink);
    }

    console.log(data);
    console.log(desc, id, pdflink, publishdate, title);
  };
}
