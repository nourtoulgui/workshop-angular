import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';   
@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe,ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText = '';
  selectedConference: Conference | null = null; 
  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Nouveautés Angular 21',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier sur les signals',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Tendances du web',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      id: 4,
      title: 'JavaScript Days',
      description: 'Édition 2025 (passée, ne doit pas s afficher)',
      date: new Date('2025-03-10'),
      place: 'Sfax',
      maxParticipants: 80,
      nbParticipants: 40,
    },
  ];

  get filteredConferences(): Conference[] {
    const today = new Date();
    const search = this.searchText.trim().toLowerCase();
    return this.conferences.filter(
      (c) => c.date >= today && c.title.toLowerCase().includes(search)
    );
  }

  selectConference(c: Conference): void {                                      
    this.selectedConference = c;
  }

  remainingPlaces(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  buttonClass(c: Conference): string {
    const reste = this.remainingPlaces(c);
    if (reste === 0) return 'btn-red';
    if (reste < 10) return 'btn-orange';
    return 'btn-green';
  }

  register(c: Conference): void {
    if (this.remainingPlaces(c) > 0) {
      c.nbParticipants++;
    }
  }
}