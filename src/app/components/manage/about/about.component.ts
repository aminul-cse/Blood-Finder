import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
  <div class="section-gap bg-gray-100 py-10 px-4">
  <!-- Header Section -->
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-gray-800">About BloodFinder</h1>
    <p class="mt-4 text-gray-600">
      BloodFinder is a life-saving platform connecting donors and recipients.
      Our mission is to ensure that no one has to wait for the precious gift of life.
    </p>
  </div>

  <!-- Features Section -->
  <div class="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Feature 1 -->
    <div class="bg-white shadow-lg rounded-lg p-6 text-center">
      <div class="text-red-500 text-4xl mb-4">
        <span class="material-icons">volunteer_activism</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-800">Connect Donors</h3>
      <p class="mt-2 text-gray-600">
        We make it easy to connect donors with those in need, ensuring timely blood availability.
      </p>
    </div>

    <!-- Feature 2 -->
    <div class="bg-white shadow-lg rounded-lg p-6 text-center">
      <div class="text-red-500 text-4xl mb-4">
        <span class="material-icons">health_and_safety</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-800">Save Lives</h3>
      <p class="mt-2 text-gray-600">
        Every donation matters. Join us in our mission to save lives and spread awareness.
      </p>
    </div>

    <!-- Feature 3 -->
    <div class="bg-white shadow-lg rounded-lg p-6 text-center">
      <div class="text-red-500 text-4xl mb-4">
        <span class="material-icons">group</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-800">Community Support</h3>
      <p class="mt-2 text-gray-600">
        Be a part of a community that supports and cares for each other in times of need.
      </p>
    </div>
  </div>

</div>
`,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent { }
