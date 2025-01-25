import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="section-gap flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
    <!-- Header -->
    <h2 class="text-2xl font-bold text-center text-gray-700">Create an Account</h2>
    <p class="text-center text-gray-500 mb-6">Join us and save lives!</p>

    <!-- Form -->
    <form>
      <!-- Name -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <!-- Phone Number -->
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <!-- Confirm Password -->
      <div class="mb-4">
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Register
      </button>
    </form>

    <!-- Login Link -->
    <div class="text-center text-sm text-gray-500 mt-2">
      Already have an account?
      <a routerLink="/login" class="text-red-500 hover:underline">Login</a>
    </div>
  </div>
</div>`,
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent { }
