import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
	tasks = [{name: 'paquito'}];
	selectedTask;

	constructor(private api: ApiService) {
		this.getTasks();
		this.selectedTask = {name: '', id: -1};
	}

	getTasks = () => {
		this.api.listTasks().subscribe(
			data => {
				this.tasks = data;
			},
			error => {
				//console.log(error);
			}
		)
	}

	editTask = (task) => {
		this.api.getSingleTask(task.id).subscribe(
			data => {
				this.selectedTask = data;
			},
			error => {
				//console.log(error);
			}
		)
	}

	updateTask = () => {
		this.api.updateTask(this.selectedTask).subscribe(
			data => {
				this.getTasks();
			},
			error => {
				//console.log(error);
			}
		)

	}

	addTask = () => {
		this.api.addTask(this.selectedTask).subscribe(
			data => {
				this.getTasks();
			},
			error => {
				//console.log(error);
			}
		)

	}

	removeTask = (task) => {
		this.api.removeTask(task.id).subscribe(
			data => {
				this.getTasks();
			},
			error => {
				//console.log(error);
			}
		)

	}

	completeTask = (id) => {
		this.api.completeTask(id).subscribe(
			data => {
				this.getTasks();
			},
			error => {
				//console.log(error);
			}
		)
	}

}
