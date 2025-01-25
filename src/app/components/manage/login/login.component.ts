import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="flex items-center justify-center bg-gray-100 section-gap">
  <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
    <!-- Header -->
    <h2 class="text-2xl font-bold text-center text-gray-700">Welcome!</h2>
    <p class="text-center text-gray-500 mb-6">Login to your account</p>

    <!-- Form -->
    <form>
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

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Login
      </button>
    </form>

    <!-- Divider -->
    <div class="mt-6 flex items-center">
      <div class="border-t border-gray-300 flex-grow"></div>
      <span class="mx-3 text-sm text-gray-400">OR</span>
      <div class="border-t border-gray-300 flex-grow"></div>
    </div>

    <!-- Signup Link -->
    <p class="text-center text-sm text-gray-500 mt-6">
      Don’t have an account?
      <a routerLink="/register" class="text-red-500 hover:underline">Register</a>
    </p>
  </div>
</div>
`,
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { }
