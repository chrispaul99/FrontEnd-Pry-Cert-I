import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders, FileItem } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Output() imagen = new EventEmitter<FileUploader>();
  uploader:FileUploader;
  hasBaseDropZoneOver = false;
  @Input() previewPath:any = null;
  valido = true;
  
  constructor(private cloudinary: Cloudinary,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      autoUpload: false, // Cargar archivos automáticamente al agregarlos a la cola de carga
      isHTML5: true, // Use xhrTransport a favor de iframeTransport
      removeAfterUpload: true, // Calcule el progreso de forma independiente para cada archivo cargado
      headers: [ // XHR request headers
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Agregue el preajuste de carga sin firmar de Cloudinary al formulario de carga
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      // Usar el valor predeterminado "withCredentials" para las solicitudes CORS
      fileItem.withCredentials = false;
      return { fileItem, form };
    }
    this.uploader.onAfterAddingFile = (fileItem) => {
      console.log("hola");
      this.valido = false;
      this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
      this.imagen.emit(this.uploader);
    }

  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
    console.log(this.hasBaseDropZoneOver);
  }

  borrarImagen(item:FileItem){
    item.remove();
    this.previewPath = null;
    this.valido = true;
    this.imagen.emit(null);
  }
}
