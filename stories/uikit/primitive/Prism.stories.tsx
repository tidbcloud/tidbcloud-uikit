import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Prism } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Prism>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Prism> = {
  title: 'Primitive/Prism',
  component: Prism,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <Prism language="typescript">
      {`// Import statement
import { useState, useEffect } from 'react';

// Interface definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Enum (though we prefer maps, including for demonstration)
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

// Type alias
type UserWithRole = User & { role: UserRole };

// Function with generics
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}

// Async function
async function fetchUserData(userId: number): Promise<User> {
  const response = await fetch(\`https://api.example.com/users/\${userId}\`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}

// React functional component
const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserData(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

// Class (for demonstration, though we prefer functional approaches)
class Logger {
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(\`[${new Date().toISOString()}] \${message}\`);
  }
}

// Object literal with method
const mathUtils = {
  add: (a: number, b: number): number => a + b,
  subtract: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
};

// Template literal
const greeting = \`Hello, \${user.name}!\`;

// Conditional (ternary) operator
const userStatus = user.isActive ? 'active' : 'inactive';

// Array methods with arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Destructuring assignment
const { name, email } = user;
const [first, second, ...rest] = numbers;

// Spread operator
const updatedUser = { ...user, lastLogin: new Date() };

// Optional chaining and nullish coalescing
const userCity = user?.address?.city ?? 'Unknown';

// BigInt
const bigNumber: bigint = 1234567890123456789012345678901234567890n;

// Symbol
const uniqueKey = Symbol('description');

// Set and Map
const uniqueNumbers = new Set(numbers);
const userRoles = new Map<number, UserRole>([
  [1, UserRole.Admin],
  [2, UserRole.User],
]);

// Decorators (experimental)
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey} with args: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Example {
  @log
  greet(name: string): string {
    return \`Hello, \${name}!\`;
  }
}`}
    </Prism>
  )
}
