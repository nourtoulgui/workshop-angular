import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  // REÇOIT la conférence sélectionnée depuis le parent
  conference = input<Conference | null>(null);

  // ENVOIE un événement au parent quand on clique sur "S'inscrire"
  register = output<Conference>();

  remainingPlaces(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  onRegister(): void {
    const c = this.conference();
    if (c) {
      this.register.emit(c);
    }
  }
}