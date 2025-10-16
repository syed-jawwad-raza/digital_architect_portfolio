import React, { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Text, Stars, Line, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { SKILLS, SKILL_RELATIONS, PROJECTS, EXPERIENCES, MY_NAME, MY_TITLE } from '../constants';
import { useStore } from '../hooks/useStore';
import type { Skill, Experience } from '../types';

const HeroObject: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.15;
      ref.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.6, 0.32, 200, 32]} />
        <meshStandardMaterial color="#FFA500" emissive="#FFA500" emissiveIntensity={0.8} metalness={0.2} roughness={0.3} />
      </mesh>
      {/* subtle glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <ringGeometry args={[2.2, 2.6, 64]} />
        <meshBasicMaterial color="#00FF7F" transparent opacity={0.06} toneMapped={false} />
      </mesh>
      {/* outer additive shell for holographic look */}
      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#00FF7F" transparent opacity={0.06} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
    </group>
  );
};

const Shard: React.FC<{ index: number }> = ({ index }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      const r = 2.2 + (index % 3) * 0.25;
      ref.current.position.x = Math.cos(t * (0.6 + index * 0.05) + index) * r;
      ref.current.position.y = Math.sin(t * (0.5 + index * 0.03) + index) * 0.5 + 0.6;
      ref.current.position.z = Math.sin(t * (0.4 + index * 0.02) + index) * 0.6;
      ref.current.rotation.x += 0.01 + index * 0.001;
      ref.current.rotation.y += 0.02 + index * 0.001;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial color="#7CFFB2" emissive="#7CFFB2" emissiveIntensity={0.7} metalness={0.6} roughness={0.15} />
    </mesh>
  );
};

const ProjectPlanet: React.FC<{ project: typeof PROJECTS[0]; position: [number, number, number] }> = ({ project, position }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const selectProject = useStore((state) => state.selectProject);

  useFrame((_, delta) => {
    if(ref.current) {
        ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => selectProject(project)}
    >
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial color={hovered ? '#00FF7F' : '#FFA500'} emissive={hovered ? '#00FF7F' : '#FFA500'} emissiveIntensity={hovered ? 0.5 : 0.2} wireframe />
      <Html distanceFactor={10} position={[0, 1.2, 0]}>
        <div className={`transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          <p className="text-center font-oswald text-white bg-[#0A192F]/50 px-2 py-1 rounded">{project.name}</p>
        </div>
      </Html>
    </mesh>
  );
};

const SkillStar: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <mesh position={skill.position} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            <sphereGeometry args={[0.1 + skill.level / 500, 16, 16]} />
            <meshBasicMaterial color={hovered ? '#FFA500' : '#00FF7F'} />
            <Html distanceFactor={10} position={[0, 0.3, 0]}>
                 <div className={`transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
                    <p className="text-center font-oswald text-white bg-[#0A192F]/50 px-2 py-1 rounded">{skill.name}</p>
                 </div>
            </Html>
        </mesh>
    );
};

const ExperienceMilestone: React.FC<{ experience: Experience; position: [number, number, number] }> = ({ experience, position }) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, setHovered] = useState(false);
    const selectExperience = useStore((state) => state.selectExperience);

    return (
        <group position={position}>
            <mesh
                ref={ref}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => selectExperience(experience)}
            >
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color={hovered ? '#00FF7F' : '#FFA500'} emissive={hovered ? '#00FF7F' : '#FFA500'} emissiveIntensity={hovered ? 0.8 : 0.5} />
            </mesh>
             <Html distanceFactor={10} position={[0.5, 0, 0]}>
                <div className={`transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
                <p className="text-left font-oswald text-white bg-[#0A192F]/50 px-2 py-1 rounded w-40">{experience.role}</p>
                </div>
            </Html>
        </group>
    );
};

const Scene: React.FC = () => {
  const scroll = useScroll();
  const { camera } = useThree();
  const sceneGroup = useRef<THREE.Group>(null!);
  const heroGroup = useRef<THREE.Group>(null!);

  const skillMap = useMemo(() => new Map(SKILLS.map(s => [s.id, s])), []);
  
  useFrame(() => {
    const offset = scroll.offset;
    const y = -offset * 62; // Extended total scene depth
    camera.position.set(Math.sin(offset * Math.PI * 2) * 2, y, Math.cos(offset * Math.PI * 2) * 6 + 4);
    camera.lookAt(0, y, 0);
  });

  // floating hero animation
  useFrame(({ clock }) => {
    if (heroGroup.current) {
      const t = clock.getElapsedTime();
      heroGroup.current.position.y = Math.sin(t * 0.6) * 0.15;
      heroGroup.current.rotation.y = Math.sin(t * 0.2) * 0.08;
    }
  });
  
  return (
    <>
      <color attach="background" args={['#0A192F']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#FFA500" intensity={1} />
      {/* focused neon point light near hero */}
      <pointLight position={[0, 3, 2]} color="#00FF7F" intensity={0.6} distance={8} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <group ref={sceneGroup}>
        {/* Hero Section */}
        <group position={[0, 0, 0]}>
            {/* floating hero group */}
            <group
              position={[0, 0, 0]}
              ref={heroGroup}
            >
              <HeroObject />
              {/* orbiting holographic shards */}
              {[...Array(14)].map((_, i) => <Shard key={i} index={i} />)}
            </group>
            {/* Layered neon text: faint glow underneath + crisp top layer */}
            <Text fontSize={0.95} position={[0, 2.8, 0]} anchorX="center" color="#00FF7F">
              {MY_NAME}
            </Text>
            <Text fontSize={0.95} position={[0, 2.78, 0]} anchorX="center" color="#E6F1FF">
              {MY_NAME}
            </Text>

            <Text fontSize={0.35} position={[0, -2.4, 0]} anchorX="center" color="#00FF7F">
              {MY_TITLE}
            </Text>


        </group>

        {/* Projects Section */}
        <group position={[0, -12.5, 0]}>
            {PROJECTS.map((project, i) => (
                <ProjectPlanet key={project.id} project={project} position={[(i % 2 === 0 ? -1 : 1) * 3, (Math.floor(i/2) * -4), 0]} />
            ))}
        </group>

        {/* Skills Section */}
        <group position={[0, -25, 0]}>
            {SKILLS.map(skill => <SkillStar key={skill.id} skill={skill} />)}
            {SKILL_RELATIONS.map((rel, i) => {
                const fromSkill = skillMap.get(rel.from);
                const toSkill = skillMap.get(rel.to);
                if (!fromSkill || !toSkill) return null;
                return <Line key={i} points={[fromSkill.position, toSkill.position]} color="white" lineWidth={0.5} dashed dashScale={10} gapSize={5} />;
            })}
        </group>
        
        {/* Experience Section */}
        <group position={[0, -37.5, 0]}>
            {EXPERIENCES.map((exp, i) => (
                 <ExperienceMilestone key={exp.id} experience={exp} position={[0, i * -4, 0]} />
            ))}
             <Line points={EXPERIENCES.map((_,i) => new THREE.Vector3(0, i*-4, 0))} color="white" lineWidth={1} dashed dashScale={5} gapSize={2} />
        </group>

        {/* Contact Section */}
        <group position={[0, -55, 0]}>
            <mesh>
                <torusGeometry args={[1, 0.1, 16, 100]} />
                <meshStandardMaterial color="#00FF7F" emissive="#00FF7F" emissiveIntensity={0.8} />
            </mesh>
        </group>
      </group>

      <EffectComposer>
        <Bloom intensity={0.9} luminanceThreshold={0.12} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
};

export default Scene;